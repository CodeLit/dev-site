const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

require('laravel-mix-tailwind')
require('laravel-vue-i18n/mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/build/js')
    .copy( 'resources/images', 'public/images')
    .vue({
        options: {
            compilerOptions: {
                isCustomElement: (tag) => tag.match(/^ion-/),
            },
        },
    })
    .sass('resources/scss/app.scss', 'public/build/css')
    .tailwind()
    .i18n('resources/lang')
    .sourceMaps()
    .disableNotifications()
    .webpackConfig({
        stats: {
            // children: true,
        },
        plugins: [new LiveReloadPlugin()],
    })
