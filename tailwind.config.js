import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'Dubai-regular': ['Dubai-Regular', ...defaultTheme.fontFamily.sans],
                'Dubai-medium': ['Dubai-Medium', ...defaultTheme.fontFamily.sans],
                'Dubai-semibold': ['Dubai-Semibold', ...defaultTheme.fontFamily.sans],
                'Dubai-bold': ['Dubai-Bold', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
