<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
