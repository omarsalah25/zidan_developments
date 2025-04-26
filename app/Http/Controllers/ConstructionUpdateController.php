<?php
namespace App\Http\Controllers;

use ConstructionUpdate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Unit;

class ConstructionUpdateController extends Controller
{
    public function index()
    {
        $updates = ConstructionUpdate::with('unit')->get();
        return Inertia::render('ConstructionUpdates/Index', ['updates' => $updates]);
    }

    public function create()
    {
        $units = Unit::all();
        return Inertia::render('ConstructionUpdates/Create', ['units' => $units]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'unit_id' => 'required|exists:units,id',
            'title' => 'required|string',
            'title_ar' => 'required|string',
        ]);

        ConstructionUpdate::create($request->all());
        return Redirect::route('construction-updates.index')->with('success', 'Update created');
    }

    public function show(ConstructionUpdate $constructionUpdate)
    {
        return Inertia::render('ConstructionUpdates/Show', ['update' => $constructionUpdate->load('unit')]);
    }

    public function edit(ConstructionUpdate $constructionUpdate)
    {
        $units = Unit::all();
        return Inertia::render('ConstructionUpdates/Edit', [
            'update' => $constructionUpdate,
            'units' => $units
        ]);
    }

    public function update(Request $request, ConstructionUpdate $constructionUpdate)
    {
        $request->validate([
            'unit_id' => 'required|exists:units,id',
            'title' => 'required|string',
            'title_ar' => 'required|string',
        ]);

        $constructionUpdate->update($request->all());
        return Redirect::route('construction-updates.index')->with('success', 'Update updated');
    }

    public function destroy(ConstructionUpdate $constructionUpdate)
    {
        $constructionUpdate->delete();
        return Redirect::route('construction-updates.index')->with('success', 'Update deleted');
    }
}
