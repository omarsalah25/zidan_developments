<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    public function handle(Request $request, Closure $next): Response
    {
        // Use session locale if set, otherwise detect browser language
        $languageCode = session('locale') ?? $this->detectBrowserLanguage($request);
        // Specify the path to the language JSON files
        $localesPath = base_path('app/locales');
        $languageFilePath = "{$localesPath}/{$languageCode}.json";

        // Map language codes to flag codes and set a default flag
        $flagMapping = [
            'ar' => 'sa',
            'en' => 'gb',
            // Add more mappings as needed
        ];
        $flag = $flagMapping[$languageCode] ?? 'gb'; // Default to 'gb'

        // Default data and language code in case the file doesn't exist
        $data = [];
        if (file_exists($languageFilePath)) {
            $data = json_decode(file_get_contents($languageFilePath), true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Invalid JSON in language file: ' . $languageFilePath);
            }
        } else {
            // Fallback to English if the language file does not exist
            $englishFilePath = "{$localesPath}/en.json";
            if (file_exists($englishFilePath)) {
                $data = json_decode(file_get_contents($englishFilePath), true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new \Exception('Invalid JSON in fallback language file: ' . $englishFilePath);
                }
            }
            $languageCode = 'en';
            $flag = 'gb';
        }

        // Inject locale data for Inertia
        inertia()->share('localeData', [
            'data' => $data,
            'languageCode' => $languageCode,
            'languageFlag' => $flag,
        ]);

        return $next($request);
    }



    private function detectBrowserLanguage(Request $request): string
    {
        $acceptLanguage = $request->server('HTTP_ACCEPT_LANGUAGE', 'en');
        return substr($acceptLanguage, 0, 2); // Get the first two characters
    }
}
