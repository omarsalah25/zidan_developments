<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('units')->orderBy('created_at', 'desc')->get();
        return Inertia::render('Projects/Index', ['projects' => $projects]);
    }
    public function adminIndex()
    {
        $projects = Project::with('units')->orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Projects/Index', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function store(Request $request)
    {
        // dd($request->all());
       $project = Project::create([
        'title' => $request->title,
        'title_ar' => $request->title_ar,
        'desc' => $request->desc,
        'desc_ar' => $request->desc_ar,
        'status' => $request->status,
        'slug' => str($request->title)->slug(),
    ]);

    // Correctly access the uploaded file
    if ($request->hasFile('image.file.originFileObj')) {
        $imageFile = $request->file('image')['file']['originFileObj'];
        $project->image = $imageFile->store('projects', 'public');
    }

    $project->save();

        return redirect('/admin/projects')->with('success', 'Project created');
    }

    public function show($slug)
    {
        $project = Project::where('slug', $slug)->with('units')->firstOrFail();
        return Inertia::render('Projects/Show', ['project' => $project]);
    }
    public function AdminShow($slug)
    {
        $project = Project::where('slug', $slug)->with('units')->firstOrFail();
        return Inertia::render('Admin/Projects/View', ['project' => $project]);
    }

    public function edit($slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        // dd($project);
        return Inertia::render('Admin/Projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, $id)
    {
// dd($request->all());

        $project = Project::where('id', $id)->firstOrFail();
        $project->title = $request->title;
        $project->title_ar = $request->title_ar;
        $project->desc = $request->desc;
        $project->desc_ar = $request->desc_ar;
        $project->status = $request->status;
        // $project->update($request->only([
        //     'title'=> $request->title,
        //     'title_ar' => $request->title_ar,
        //     'desc' => $request->desc,
        //     'desc_ar' => $request->desc_ar,
        //     'status' => $request->status,
        // ]));
        if ($request->hasFile('image.file.originFileObj')) {
            $project->update([
                'image' => $request->file('image.file.originFileObj')->store('projects', 'public')
            ]);
        }
        $project->update();

        return redirect()->back()->with('success', 'Project updated');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect('/admin/projects/')->with('success', 'Project deleted');
    }
}
