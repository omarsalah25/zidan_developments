<?php

use App\Http\Controllers\AmenityController;
use App\Http\Controllers\ConstructionUpdateController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UnitController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::post('/locale', function (Request $request) {
    $locale = $request->input('locale');

    if (in_array($locale, config('app.available_locales', ['en']))) {
        // Set the session and application locale
        session()->put('locale', $locale);
        app()->setLocale($locale);

        // Specify the path to the language JSON files
        $localesPath = base_path('app/locales');
        $languageFilePath = "{$localesPath}/{$locale}.json";

        // Map language codes to flag codes and set a default flag
        $flagMapping = [
            'ar' => 'sa',
            'en' => 'gb',
            'fr' => 'fr',
            // Add more mappings as needed
        ];
        $flag = $flagMapping[$locale] ?? 'gb'; // Default to 'gb'

        // Load the language file or fallback to English
        if (file_exists($languageFilePath)) {
            $data = json_decode(file_get_contents($languageFilePath), true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Invalid JSON in language file: ' . $languageFilePath);
            }
        } else {
            $fallbackPath = "{$localesPath}/en.json";
            if (file_exists($fallbackPath)) {
                $data = json_decode(file_get_contents($fallbackPath), true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new \Exception('Invalid JSON in fallback language file: ' . $fallbackPath);
                }
            }
            $locale = 'en';
            $flag = 'gb';
            $data = []; // Default to an empty array if no language file is found
        }

        // Save the locale data into the session to be shared with Inertia
        session()->put('localeData', [
            'data' => $data,
            'languageCode' => $locale,
            'languageFlag' => $flag,
        ]);

        // Share updated locale data with Inertia
        Inertia::share('localeData', [
            'data' => $data,
            'languageCode' => $locale,
            'languageFlag' => $flag,
        ]);

        // Redirect back to the previous page
        return Inertia::location(url()->previous());
    }

    return back()->withErrors(['locale' => 'Invalid locale selected.']);
});

Route::get('/', [FrontendController::class, 'Welcome'])->name('welcome');


Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard Home
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    /**
     * Projects
     */
    Route::get('admin/projects', [ProjectController::class, 'adminIndex'])->name('projects.adminIndex');
    Route::get('admin/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('admin/projects/store', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('admin/projects/{slug}', [ProjectController::class, 'AdminShow'])->name('projects.show');
    Route::get('admin/projects/{slug}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::post('admin/projects/{id}/update', [ProjectController::class, 'update'])->name('projects.update');
    Route::get('admin/projects/{id}/delete', [ProjectController::class, 'destroy'])->name('projects.delete');

    /**
     * Units
     */
    Route::get('admin/units', [UnitController::class, 'adminIndex'])->name('units.adminIndex');
    Route::get('admin/units/create', [UnitController::class, 'create'])->name('units.create');
    Route::post('admin/units/store', [UnitController::class, 'store'])->name('units.store');
    Route::get('admin/units/{slug}', [UnitController::class, 'AdminShow'])->name('units.show');
    Route::get('admin/units/{slug}/edit', [UnitController::class, 'edit'])->name('units.edit');
    Route::post('admin/units/{id}/update', [UnitController::class, 'update'])->name('units.update');
    Route::get('admin/units/{id}/delete', [UnitController::class, 'destroy'])->name('units.delete');

    /**
     * Amenities
     */
    Route::resource('amenities', AmenityController::class);


});


Route::get('/projects',[ProjectController::class, 'index']);
Route::get('/projects/{slug}',[ProjectController::class, 'show']);
Route::get('/units',[UnitController::class, 'index']);
Route::get('/units/{slug}',[UnitController::class, 'show']);
Route::get('/construction',[ConstructionUpdateController::class, 'index']);
Route::get('/construction-updates/{slug}',[ConstructionUpdateController::class, 'show']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
