<?php

namespace App\Http\Controllers;

use App\Models\Amenity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class AmenityController extends Controller
{
    public function index()
    {
        $amenities = Amenity::all();
        return Inertia::render('Admin/Amenities/Index', ['amenities' => $amenities]);
    }

    public function create()
    {
        return Inertia::render('Admin/Amenities/Create');
    }

    public function store(Request $request)
    {


         $amenity = Amenity::create([
        'name' => $request->name,
        'name_ar' => $request->name_ar,
    ]);

      if ($request->hasFile('icon.file')) {
        $imageFile = $request->file('icon')['file'];
        // dd($imageFile);
        $amenity->icon = $imageFile->store('amenities', 'public');
    }
    $amenity->save();

    return redirect(to: '/admin/amenities')->with('success', 'amenity created');
    }

    public function show(Amenity $amenity)
    {
        return Inertia::render('Amenities/Show', ['amenity' => $amenity]);
    }

    public function edit($id)
    {
        $amenity = Amenity::findOrFail($id);
        return Inertia::render('Admin/Amenities/Edit', ['amenity' => $amenity]);
    }

public function update(Request $request, $id)
{
    $amenity = Amenity::findOrFail($id);
    $amenity->update([
        'name' => $request->name,
        'name_ar' => $request->name_ar,
    ]);

    if ($request->hasFile('icon.file')) {
        $imageFile = $request->file('icon')['file']['originFileObj'];
        $amenity->icon = $imageFile->store('amenities', 'public');
        $amenity->save();
    }

    return redirect('/admin/amenities')->with('success', 'Amenity updated');
}
    public function destroy( $id)
    {
    $amenity = Amenity::findOrFail($id);
    $amenity->delete();
        return redirect()->back()->with('success', 'Amenity deleted');
    }
}
