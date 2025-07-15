<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Ensure a default locale is set
        if (!session()->has('locale')) {
            session()->put('locale', 'en');
            app()->setLocale('en');
        }

        $locale = session()->get('locale', 'en');
        $languageFlag = $locale === 'ar' ? 'sa' : 'gb'; // Example flag logic

        // Load the language JSON file
        $localesPath = base_path('app/locales');
        $languageFilePath = "{$localesPath}/{$locale}.json";

        $translations = file_exists($languageFilePath)
            ? json_decode(file_get_contents($languageFilePath), true)
            : [];

        // Fallback to English if the file doesn't exist
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'localeData' => [
                'data' => $translations,
                'languageCode' => $locale,
                'languageFlag' => $languageFlag,
            ],
        ];
    }

}
