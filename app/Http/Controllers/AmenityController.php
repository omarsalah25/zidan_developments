<?php

namespace App\Http\Controllers;

use Amenity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class AmenityController extends Controller
{
    public function index()
    {
        $amenities = Amenity::all();
        return Inertia::render('Amenities/Index', ['amenities' => $amenities]);
    }

    public function create()
    {
        return Inertia::render('Amenities/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'title_ar' => 'required|string',
        ]);

        Amenity::create($request->all());
        return Redirect::route('amenities.index')->with('success', 'Amenity created');
    }

    public function show(Amenity $amenity)
    {
        return Inertia::render('Amenities/Show', ['amenity' => $amenity]);
    }

    public function edit(Amenity $amenity)
    {
        return Inertia::render('Amenities/Edit', ['amenity' => $amenity]);
    }

    public function update(Request $request, Amenity $amenity)
    {
        $request->validate([
            'title' => 'required|string',
            'title_ar' => 'required|string',
        ]);

        $amenity->update($request->all());
        return Redirect::route('amenities.index')->with('success', 'Amenity updated');
    }

    public function destroy(Amenity $amenity)
    {
        $amenity->delete();
        return Redirect::route('amenities.index')->with('success', 'Amenity deleted');
    }
}
