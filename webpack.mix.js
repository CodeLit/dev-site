const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

require('laravel-mix-tailwind')

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
mix.js('resources/js/app.js', 'public/js')
    .copy( 'resources/images', 'public/images')
    .vue()
    .sass('resources/scss/app.scss', 'public/css')
    .tailwind()
    .sourceMaps()

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()],
})
