<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $perPage = 10;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', false)
            ->latest()
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = null;
        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render('user/Dashboard', [
            'note' => $note ? $note->load('tags') : null,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function archive(Request $request, ?Note $note = null)
    {
        $page = $request->query('page', 1);
        $perPage = 10;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', true)
            ->latest()
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = null;
        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render('user/Archive', [
            'note' => $note ? $note->load('tags') : null,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function search(Request $request)
    {
        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->when($request->search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%$search%")
                        ->orWhere('content', 'like', "%$search%")
                        ->orWhereHas('tags', function ($q) use ($search) {
                            $q->where('name', 'like', "%$search%");
                        });
                });
            })
            ->latest()
            ->get();

        return inertia('user/Archive', compact('notes'));
    }

    public function tag(Request $request, Tag $tag)
    {
        $page = $request->query('page', 1);
        $perPage = 10;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->whereHas('tags', fn($query) => $query->where('tags.name', $tag->name))
            ->latest()
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = null;
        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render('user/Dashboard', [
            'tag' => $tag,
            'note' => $note ? $note->load('tags') : null,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'tags' => 'nullable|string',
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

        return redirect()->intended(route('home'))->with('message', 'Note successfully created!');
    }

    public function update(Request $request, Note $note)
    {
        Gate::authorize('update', $note);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'tags' => 'nullable|string',
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

        return redirect()->back()->with('message', 'Note successfully updated!');
    }

    public function archiveNote(Note $note)
    {
        Gate::authorize('update', $note);
        $note->update(['archived' => true]);

        return redirect()->intended(route('home'))->with('message', 'Note successfully archived!');
    }

    public function restoreNote(Note $note)
    {
        Gate::authorize('update', $note);
        $note->update(['archived' => false]);

        return redirect()->intended(route('home'))->with('message', 'Note successfully restored!');
    }

    public function destroy(Note $note)
    {
        Gate::authorize('delete', $note);
        $note->delete();

        return redirect()->intended(route('home'))->with('message', 'Note successfully deleted!');
    }
}
