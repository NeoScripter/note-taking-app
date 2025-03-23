<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class NoteController extends Controller
{
    public function index(Request $request, ?Note $note = null)
    {
        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', false)
            ->latest()
            ->get();

        if ($note && $note->user_id !== $request->user()->id) {
            abort(403);
        }

        return inertia('user/Dashboard', [
            'notes' => $notes,
            'note' => $note ? $note->load('tags') : null,
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

    public function show(Note $note)
    {
        $note->load('tags');
        return inertia()->render('partials/Note', ['note' => $note]);
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
