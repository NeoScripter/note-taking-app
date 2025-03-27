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
        $perPage = 25;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', false)
            ->orderBy('updated_at', 'desc')
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
            'note' => $note,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function archive(Request $request, ?Note $note = null)
    {
        $page = $request->query('page', 1);
        $perPage = 25;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', true)
            ->orderBy('updated_at', 'desc')
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
            'note' => $note,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function search(Request $request)
    {
        $page = $request->query('page', 1);
        $perPage = 25;
        $noteId = $request->query('note_id');

        $normalilzedQuery = strtolower($request->search);

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->when($normalilzedQuery, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                        ->orWhereHas('tags', function ($q) use ($search) {
                            $q->where('name', 'like', "%{$search}%");
                        });
                });
            })
            ->orderBy('updated_at', 'desc')
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = null;
        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render('user/Search', [
            'note' => $note,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
    }

    public function tag(Request $request, string $tag)
    {
        $page = $request->query('page', 1);
        $perPage = 25;
        $noteId = $request->query('note_id');

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->whereHas('tags', fn($query) => $query->where('tags.name', $tag))
            ->orderBy('updated_at', 'desc')
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = null;
        if ($noteId) {
            $note = Note::findOrFail($noteId);
            Gate::authorize('view', $note);
            $note->load('tags');
        }

        return Inertia::render('user/Tag', [
            'tag' => $tag,
            'note' => $note,
            'notes' => Inertia::merge($notes->items()),
            'page' => $page,
            'isNextPageExists' => $isNextPageExists
        ]);
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

        return redirect()->intended(route('home'))->with('message', 'Note successfully created!');
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
