// import tailwindForms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
export default {
    content: [ // Don't add all files. It can break a watcher. Might be a conflict with a l18n plugin.
        './resources/js/**/*.js',
        './resources/vue/**/*.vue',
        './resources/scss/**/*.scss',
        './resources/views/**/*.php',
    ],
    variants: {
        extend: {},
    },
    plugins: [
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

