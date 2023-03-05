const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

require('laravel-mix-tailwind')
require('laravel-vue-i18n/mix')
require('laravel-mix-favicon')
require('laravel-mix-webp')

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
mix.setPublicPath('public')
    .webpackConfig({
        stats: {
            // children: true,
        },
        plugins: [new LiveReloadPlugin()],
    })
    .sourceMaps()
    .disableNotifications()
    .js('resources/js/app.js', 'public/build/js')
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
    .ImageWebp({
        // requires libwebp-dev in ubuntu
        from: 'resources/images',
        to: 'public/img',
        imageminWebpOptions: {
            quality: 50,
        },
    })
    .copy('resources/images/svg', 'public/img/svg')
    .favicon({
        inputPath: 'resources/images/favicon',
        inputFile: '*.{jpg,png,svg}',
        publicPath: 'public',
        output: 'img/favicon',
        dataFile: 'data/faviconData.json',
        blade: 'resources/views/layout/favicon.blade.php',
        reload: false,
        debug: false,
        configPath: './realfavicongenerator-config.json',
        cleaner: {
            use: false,
            path: null,
            timestamp: true,
        },
    })
    .version()
