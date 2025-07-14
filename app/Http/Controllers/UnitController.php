<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUnitRequest;
use App\Http\Requests\UpdateUnitRequest;
use App\Models\Amenity;
use App\Models\Project;
use App\Models\Unit;
use App\Models\UnitImage;
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
        return Inertia::render('Admin/Units/Create', [
            'projects' => $projects,
            'amenities' => $amenities,
        ]);
    }

   public function store(Request $request)
{

    // dd($request->all());
    // Validate the request


    $unit = Unit::create([
        'title' => $request->title,
        'title_ar' => $request->title_ar,
        'desc' => $request->desc ?? null,
        'desc_ar' => $request->desc_ar ?? null,
        'status' => $request->status,
        'project_id' => $request->project_id,
        'slug' => \Illuminate\Support\Str::slug($request->title),
    ]);

    // Attach amenities if provided
    if (!empty($request->amenities)) {
        $unit->amenities()->sync($request->amenities);
    }

    if ($request->hasFile('thumbnail.file.originFileObj')) {
        $imageFile = $request->file('thumbnail')['file']['originFileObj'];
        // dd($imageFile);
        $unit->thumbnail = $imageFile->store('units', 'public');
    }

    // Handle Ant Design style file structure: images[].file.originFileObj
    if (!empty($request->images) && is_array($request->images)) {
        foreach ($request->images as $img) {
            if (isset($img['originFileObj']) && $img['originFileObj']->isValid()) {
                $storedImage = $img['originFileObj']->store('unit-images', 'public');
                $unit->unitImages()->create([
                    'image' => $storedImage,
                ]);
            }
        }
    }

    $unit->save();


    return redirect(to: '/admin/units')->with('success', 'Units created');
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

    public function edit( $slug)
    {
        $unit=Unit::whereSlug($slug)->first();
        $projects = Project::all();
        $amenities = Amenity::all();
        return Inertia::render('Admin/Units/Edit', [
            'unit' => $unit,
            'projects' => $projects,
            'amenities' => $amenities,
        ]);
    }

public function update(Request $request, $id)
{

    // dd($id);
    // dd($request->all());
    // Validate the request
    $unit = Unit::findOrFail($id);

    // Update basic fields
    $unit->update([
        'title' => $request->title,
        'title_ar' => $request->title_ar,
        'desc' => $request->desc ?? null,
        'desc_ar' => $request->desc_ar ?? null,
        'status' => $request->status,
        'project_id' => $request->project_id,
        'slug' => \Illuminate\Support\Str::slug($request->title),
    ]);

    // Sync amenities if provided
    if (!empty($request->amenities)) {
        $unit->amenities()->sync($request->amenities);
    }

    // Handle thumbnail update
    if ($request->hasFile('thumbnail.file.originFileObj')) {
        $imageFile = $request->file('thumbnail')['file']['originFileObj'];
        $unit->thumbnail = $imageFile->store('units', 'public');
    }

    // Handle additional images
    if (!empty($request->images) && is_array($request->images)) {
        foreach ($request->images as $img) {
            if (isset($img['originFileObj']) && $img['originFileObj']->isValid()) {
                $storedImage = $img['originFileObj']->store('unit-images', 'public');
                $unit->unitImages()->create([
                    'image' => $storedImage,
                ]);
            }
        }
    }

    $unit->save();

    return redirect('/admin/units')->with('success', 'Unit updated successfully');
}

    public function destroy($unitId)
    {
        $unit = Unit::findOrFail($unitId);
        $unit->delete();
        return Redirect::route('units.index')->with('success', 'Unit deleted');
    }
    public function destroyUnitImage($unitImageId)
    {
        $unitImage = UnitImage::findOrFail($unitImageId);
        $unitImage->delete();
        return redirect()->back()->with('success', 'Unit image deleted successfully');
    }

}
