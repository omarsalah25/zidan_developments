import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export function LanguageToggle() {
    const { localeData } = usePage().props;
    const [currentLocale, setCurrentLocale] = useState(localeData?.languageCode);
    const [newLocale, setNewLocale] = useState();

    useEffect(() => {
        setCurrentLocale(localeData?.languageCode);
        setNewLocale(localeData?.languageCode === "en" ? "ar" : "en");
    }, [localeData?.languageCode]);

    const toggleLocale = () => {
        const newLocale = currentLocale === "en" ? "ar" : "en";
        router.post(
            "/locale",
            { locale: newLocale },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    setCurrentLocale(newLocale);
                },
            }
        );
    };

    const getFlagImageUrl = (locale) => {
        switch (locale) {
            case "en":
                return "https://flagpedia.net/data/flags/h80/gb.png";
            case "ar":
                return "https://flagpedia.net/data/flags/h80/sa.png";
            default:
                return "https://flagpedia.net/data/flags/h80/gb.png";
        }
    };
    console.log(currentLocale, newLocale);
    return (
        <button
            onClick={toggleLocale}
            className="rounded-md border bg-white shadow focus:outline-none flex items-center gap-2 w-fit px-2 py-1"
        >
            <img
                src={getFlagImageUrl(newLocale)}
                alt={currentLocale}
                className="w-5 h-5"
            />
            <span className={`capitalize ${currentLocale === "ar" ? 'font-Dubai-medium' : 'font-Dubai-medium'} `}>
                {currentLocale === "ar" ? "English" : "العربية"}
            </span>
        </button>
    );
}
