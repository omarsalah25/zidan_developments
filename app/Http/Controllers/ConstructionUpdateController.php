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
        $updates = ConstructionUpdate::with('unit:id,project_id,title,title_ar,desc,desc_ar,slug,updated_at')->orderByDesc('updated_at')->get();
        return Inertia::render('ConstructionUpdates/Index', ['updates' => $updates]);
    }
    public function AdminIndex()
    {
        $updates = ConstructionUpdate::with('unit:id,project_id,title,title_ar,slug,updated_at')->orderByDesc('updated_at')->get();
        return Inertia::render('Admin/ConstructionUpdates/Index', ['updates' => $updates]);
    }

    public function create()
    {
    $units = Unit::doesntHave('constructionupdates')->get();

        return Inertia::render('Admin/ConstructionUpdates/Create', ['units' => $units]);
    }

    public function store(Request $request)
    {


         ConstructionUpdate::create([
            'unit_id' => $request->unit_id,
            'construction_update' => $request->construction_update,
            'construction_update_ar' => $request->construction_update_ar,

        ]);
        return redirect(to: '/admin/construction-updates')->with('success', 'Created ');
    }
    public function show($slug)
    {
        $unit = Unit::where('slug', $slug)->firstOrFail();
        $constructionUpdate = ConstructionUpdate::where('unit_id', $unit->id)->with('unit')->firstOrFail();

        return Inertia::render('ConstructionUpdates/Show', ['update' => $constructionUpdate]);
    }

     public function AdminShow($slug)
    {
        $unit = Unit::where('slug', $slug)->firstOrFail();
        $constructionUpdate = ConstructionUpdate::where('unit_id', $unit->id)->with('unit')->firstOrFail();

        return Inertia::render('Admin/ConstructionUpdates/View', ['update' => $constructionUpdate]);
    }


    public function edit($slug)
    {
        $units = Unit::all();
        $unit = Unit::where('slug', $slug)->firstOrFail();
        $constructionUpdate = ConstructionUpdate::where('unit_id', $unit->id)->with('unit')->firstOrFail();

        return Inertia::render('Admin/ConstructionUpdates/Edit', [
            'update' => $constructionUpdate,
            'units' => $units
        ]);
    }

    public function update(Request $request, $slug)
    {
        $unit = Unit::where('slug', $slug)->firstOrFail();
        $constructionUpdate = ConstructionUpdate::where('unit_id', $unit->id)->with('unit')->firstOrFail();
        $constructionUpdate->update($request->all());
        return redirect(to: '/admin/construction-updates')->with('success', 'Updated ');
    }

      public function destroy($Id)
    {
        $ConstructionUpdate = ConstructionUpdate::findOrFail($Id);
        $ConstructionUpdate->delete();
        return redirect()->back()->with('success', 'Update deleted');
    }

}
