<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('units')->get();
        return Inertia::render('Projects/Index', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(StoreProjectRequest $request)
    {
        Project::create($request->validated());
        return Redirect::route('projects.index')->with('success', 'Project created');
    }

    public function show(Project $project)
    {
        return Inertia::render('Projects/Show', ['project' => $project]);
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', ['project' => $project]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->validated());
        return Redirect::route('projects.index')->with('success', 'Project updated');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return Redirect::route('projects.index')->with('success', 'Project deleted');
    }
}
