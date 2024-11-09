import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
    content: [ // Don't add all files. It can break a watcher. Might be a conflict with a l18n plugin.
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.vue',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/vue/**/*.vue',
        './resources/scss/**/*.scss',
        './resources/views/**/*.php',
    ],
    variants: {
        extend: {},
    },
    plugins: [
        forms({
            strategy: 'class',
        }),
        // tailwindForms,
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
}

