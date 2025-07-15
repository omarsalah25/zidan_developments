<?php

namespace App\Http\Controllers;

use App\Models\ConstructionUpdate;
use App\Models\Project;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
 public function Welcome(): Response
    {
        $projects = Project::orderBy('created_at', 'desc')->limit(4)->get();
        $updates = ConstructionUpdate::with('unit:id,project_id,title,title_ar,desc,desc_ar,slug,updated_at')->orderByDesc('updated_at')->get();
 return Inertia::render('Welcome', [
    'projects' => $projects,
    'updates' => $updates,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);    }

}
