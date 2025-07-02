<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUnitRequest;
use App\Http\Requests\UpdateUnitRequest;
use App\Models\Amenity;
use App\Models\Project;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Str;


class UnitController extends Controller
{
    public function index()
    {
        $units = Unit::with(['project', 'images', 'amenities', 'constructionUpdates'])->get();
        return Inertia::render('Units/Index', ['units' => $units]);
    }

    public function adminIndex()
    {
        $units = Unit::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Units/Index', ['units' => $units]);
    }
    public function create()
    {
        $projects = Project::all();
        $amenities = Amenity::all();
        return Inertia::render('Units/Create', [
            'projects' => $projects,
            'amenities' => $amenities,
        ]);
    }

   public function store(Request $request)
{
    // Validate the request
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'title_ar' => 'required|string|max:255',
        'desc' => 'nullable|string',
        'desc_ar' => 'nullable|string',
        'status' => 'required|string',
        'project_id' => 'required|exists:projects,id',
        'amenities' => 'nullable|array',
        'amenities.*' => 'exists:amenities,id',
        'images' => 'nullable|array',
        'images.*.file.originFileObj' => 'file|image|max:2048',
    ]);

    $unit = Unit::create([
        'title' => $validated['title'],
        'title_ar' => $validated['title_ar'],
        'desc' => $validated['desc'] ?? null,
        'desc_ar' => $validated['desc_ar'] ?? null,
        'status' => $validated['status'],
        'project_id' => $validated['project_id'],
        'slug' => \Illuminate\Support\Str::slug($validated['title']),
    ]);

    // Attach amenities if provided
    if (!empty($validated['amenities'])) {
        $unit->amenities()->sync($validated['amenities']);
    }

    if ($request->hasFile('image.file.originFileObj')) {
        $imageFile = $request->file('image')['file']['originFileObj'];
        $unit->image = $imageFile->store('units', 'public');
    }

    // Handle Ant Design style file structure: images[].file.originFileObj
    if ($request->has('images')) {
        foreach ($request->images as $img) {
            if (isset($img['file']['originFileObj'])) {
                $storedImage = $img['file']['originFileObj']->store('unit-images', 'public');
                $unit->images()->create([
                    'image' => $storedImage,
                ]);
            }
        }
    }

    return Redirect::route('units.index')->with('success', 'Unit created');
}


    public function AdminShow( $slug)
    {
        $unit = Unit::where('slug', $slug)->with(['project', 'unitImages', 'amenities'])->firstOrFail();
        return Inertia::render('Admin/Units/View', ['unit' => $unit->load(['unitImages', 'amenities', 'project'])]);
    }

    public function show( $slug)
    {
        $unit = Unit::where('slug', $slug)->with(['project', 'unitImages', 'amenities'])->firstOrFail();
        return Inertia::render('Units/Show', ['unit' => $unit->load(['unitImages', 'amenities', 'project'])]);
    }

    public function edit(Unit $unit)
    {
        $projects = Project::all();
        $amenities = Amenity::all();
        return Inertia::render('Units/Edit', [
            'unit' => $unit->load('amenities'),
            'projects' => $projects,
            'amenities' => $amenities,
        ]);
    }

    public function update(UpdateUnitRequest $request, Unit $unit)
    {
        $unit->update($request->validated());

        if ($request->has('amenities')) {
            $unit->amenities()->sync($request->amenities);
        }

        return Redirect::route('units.index')->with('success', 'Unit updated');
    }

    public function destroy(Unit $unit)
    {
        $unit->delete();
        return Redirect::route('units.index')->with('success', 'Unit deleted');
    }
}
