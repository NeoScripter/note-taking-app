<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class NoteController extends Controller
{
    private function getNotesData(Request $request, Builder $query, string $view, $note = null, $tag = null)
    {
        $page = $request->query('page', 1);
        $perPage = 25;
        $noteId = $request->query('note_id');

        $notes = $query
            ->orderBy('updated_at', 'desc')
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];

        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render($view, [
            'tag' => $tag,
            'note' => $note,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }


    public function index(Request $request)
    {

        $query = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', false);

        return $this->getNotesData($request, $query, 'user/Dashboard');
    }

    public function archive(Request $request)
    {
        $query = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', true);

        return $this->getNotesData($request, $query, 'user/Archive');
    }

    public function search(Request $request)
    {
        $normalilzedQuery = strtolower($request->search);

        $query = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->when($normalilzedQuery, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                        ->orWhereHas('tags', function ($q) use ($search) {
                            $q->where('name', 'like', "%{$search}%");
                        });
                });
            });

        return $this->getNotesData($request, $query, 'user/Search');
    }

    public function tag(Request $request, string $tag)
    {
        $query = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->whereHas('tags', fn($query) => $query->where('tags.name', $tag));

        return $this->getNotesData($request, $query, 'user/Tag', null, $tag);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:64000',
            'tags' => 'nullable|string|max:500',
        ]);


        $note = $request->user()->notes()->create($validated);

        if (!empty($validated['tags'])) {

            $tagNames = array_filter(array_map(
                fn($tag) => strtolower(trim($tag)),
                explode(',', $validated['tags'])
            ));

            $tagIds = [];
            foreach ($tagNames as $tagName) {
                $tag = Tag::firstOrCreate(
                    ['user_id' => $request->user()->id, 'name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }

            $note->tags()->sync($tagIds);
        }

        return redirect()->intended(route('home'))->with('message', [
            'id' => uniqid(),
            'text' => __('Note successfully created!'),
        ]);
    }

    public function update(Request $request, Note $note)
    {
        Gate::authorize('update', $note);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:64000',
            'tags' => 'nullable|string|max:500',
        ]);

        $note->update($validated);

        if (isset($validated['tags'])) {
            $tagNames = array_filter(array_map(
                fn($tag) => strtolower(trim($tag)),
                explode(',', $validated['tags'])
            ));

            $tagIds = [];

            foreach ($tagNames as $tagName) {
                $tag = Tag::firstOrCreate(
                    ['user_id' => $request->user()->id, 'name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }

            $note->tags()->sync($tagIds);
        } else {
            $note->tags()->sync([]);
        }

        return redirect()->back()->with('message', [
            'id' => uniqid(),
            'text' => __('Note successfully updated!'),
        ]);
    }

    public function archiveNote(Note $note)
    {
        Gate::authorize('update', $note);
        $note->update(['archived' => true]);

        return redirect()->intended(route('home'))->with('message', [
            'id' => uniqid(),
            'text' => __('Note successfully archived!'),
        ]);
    }

    public function restoreNote(Note $note)
    {
        Gate::authorize('update', $note);
        $note->update(['archived' => false]);

        return redirect()->intended(route('home'))->with('message', [
            'id' => uniqid(),
            'text' => __('Note successfully restored!'),
        ]);
    }

    public function destroy(Note $note)
    {
        Gate::authorize('delete', $note);
        $note->delete();

        return redirect()->intended(route('home'))->with('message', [
            'id' => uniqid(),
            'text' => __('Note successfully deleted!'),
        ]);
    }
}
