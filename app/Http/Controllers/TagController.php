<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TagController extends Controller
{
    public function index(Request $request)
    {
        $tags = Tag::where('user_id', $request->user()->id)
            ->orderBy('name')
            ->get();

        return inertia('Tags/Index', compact('tags'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100|unique:tags,name,NULL,id,user_id,' . $request->user()->id,
        ]);

        $request->user()->tags()->create($validated);

        return redirect()->back();
    }

    public function update(Request $request, Tag $tag)
    {
        Gate::authorize('update', $tag);

        $validated = $request->validate([
            'name' => 'required|string|max:100|unique:tags,name,' . $tag->id . ',id,user_id,' . $request->user()->id,
        ]);

        $tag->update($validated);

        return redirect()->back();
    }

   /*  public function destroy(Tag $tag)
    {
        $this->authorize('delete', $tag);
        $tag->delete();

        return redirect()->back();
    } */
}
