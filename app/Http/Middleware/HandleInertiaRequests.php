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

          // Get the locale data that was shared in the route
          $localeData = session()->get('localeData', [

            'data' => [], // Default to empty array if no locale data in session
            'languageCode' => session()->get('locale', 'en'), // Use session locale or default to 'en'
            'languageFlag' => 'gb', // Default to GB flag for English
        ]);

        // If locale is not set in session, we default to 'en' and set it in session
        if (!session()->has('locale')) {
            session()->put('locale', 'en');
            app()->setLocale('en');
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'localeData' => $localeData,
        ];
    }
}
