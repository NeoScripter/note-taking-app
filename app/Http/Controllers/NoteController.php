<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class NoteController extends Controller
{
    public function index(Request $request)
    {
        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->latest()
            ->get();

        return inertia('user/Dashboard', compact('notes'));
    }

    public function archive(Request $request)
    {
        $notes = Note::with('tags')
            ->where('user_id', $request->user()->id)
            ->where('archived', true)
            ->latest()
            ->get();

        return inertia('user/Archive', compact('notes'));
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
