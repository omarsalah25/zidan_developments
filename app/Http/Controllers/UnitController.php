<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUnitRequest;
use App\Http\Requests\UpdateUnitRequest;
use App\Models\Amenity;
use App\Models\Project;
use App\Models\Unit;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class UnitController extends Controller
{
    public function index()
    {
        $units = Unit::with(['project', 'images', 'amenities', 'constructionUpdates'])->get();
        return Inertia::render('Units/Index', ['units' => $units]);
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

    public function store(StoreUnitRequest $request)
    {
        $unit = Unit::create($request->validated());

        if ($request->has('amenities')) {
            $unit->amenities()->sync($request->amenities);
        }

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $img) {
                $unit->images()->create([
                    'image' => $img->store('units', 'public')
                ]);
            }
        }

        return Redirect::route('units.index')->with('success', 'Unit created');
    }

    public function show(Unit $unit)
    {
        return Inertia::render('Units/Show', ['unit' => $unit->load(['images', 'amenities', 'project'])]);
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
