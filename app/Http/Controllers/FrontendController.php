<?php

namespace App\Http\Controllers;

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
 return Inertia::render('Welcome', [
    'projects' => $projects,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);    }

}
