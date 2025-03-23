<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index(Request $request, ?Note $note = null)
    {
        $page = $request->query('page', 1);
        $perPage = 10;

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        if ($note && $note->user_id !== $request->user()->id) {
            abort(403);
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
        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', true)
            ->latest()
            ->get();

        if ($note && $note->user_id !== $request->user()->id) {
            abort(403);
        }

        return inertia('user/Archive', [
            'notes' => $notes,
            'note' => $note ? $note->load('tags') : null,
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

        return inertia('Notes/Index', compact('notes'));
    }

    public function tag(Request $request, ?Note $note = null, Tag $tag)
    {
        $page = $request->query('page', 1);
        $perPage = 10;

        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->whereHas('tags', fn($query) => $query->where('tags.name', $tag->name))
            ->latest()
            ->paginate($perPage);

        $notePaginateProp = $notes->toArray();
        $isNextPageExists = $notePaginateProp['current_page'] < $notePaginateProp['last_page'];


        $note = Note::where('user_id', $request->user()->id)->find($note?->id);
        if ($note === null && $request->route('note')) {
            abort(403);
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
            'content' => 'nullable|string',
            'archived' => 'boolean',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
        ]);

        $note = $request->user()->notes()->create($validated);
        $note->tags()->attach($validated['tags'] ?? []);

        return redirect()->back();
    }

    public function update(Request $request, Note $note)
    {
        Gate::authorize('update', $note);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'archived' => 'boolean',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
        ]);

        $note->update($validated);
        $note->tags()->sync($validated['tags'] ?? []);

        return redirect()->back();
    }

    public function destroy(Note $note)
    {
        Gate::authorize('delete', $note);
        $note->delete();

        return redirect()->back();
    }
}
