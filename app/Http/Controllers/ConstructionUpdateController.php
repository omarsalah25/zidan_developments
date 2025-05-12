<?php
namespace App\Http\Controllers;

use App\Models\ConstructionUpdate;
use App\Models\Unit;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ConstructionUpdateController extends Controller
{
    public function index()
    {
        $updates = ConstructionUpdate::with('unit:id,project_id,title,title_ar,desc,desc_ar,slug')->get();
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
    public function show($slug)
    {
        $unit = Unit::where('slug', $slug)->firstOrFail();
        $constructionUpdate = ConstructionUpdate::where('unit_id', $unit->id)->with('unit')->firstOrFail();

        return Inertia::render('ConstructionUpdates/Show', ['update' => $constructionUpdate]);
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
