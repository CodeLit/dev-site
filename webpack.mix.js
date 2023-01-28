const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

require('laravel-mix-tailwind')
require('laravel-vue-i18n/mix')
require('laravel-mix-favicon');
require('laravel-mix-imagemin');

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
    // Copy all files within `resources` matching `img/**.*` into the public path, preserving the file tree.
    // Minify all images, `optipng` with `optimizationLevel` 5, disabling `jpegtran`, and adding `mozjpeg`.
    .imagemin(
        'resources/images', // not affects on anything, it's patterns option

        // copy-webpack-plugin config
        {
            patterns: [
                {from: "resources/images", to: "img"},
            ],
            options: {
                concurrency: 100,
            },
        },

        // imagemin-webpack-plugin config
        {
            optipng: {
                optimizationLevel: 5
            },
            jpegtran: null,
            plugins: [
                require("imagemin-mozjpeg")({
                    quality: 100,
                    progressive: true,
                }),
            ],
        }
    )
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
            timestamp: true
        }
    })
    .version()
