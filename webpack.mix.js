const mix = require('laravel-mix')
const LiveReloadPlugin = require('webpack-livereload-plugin')

require('laravel-mix-tailwind')
require('laravel-vue-i18n/mix')
require('laravel-mix-favicon')

if (process.arch !== 'x64') {
    console.warn('=================================================')
    console.warn('WARNING! Your architecture is', process.arch, '!')
    console.warn('If you have any troubles with images, try to use:')
    console.warn('export DOCKER_DEFAULT_PLATFORM=linux/x86_64')
    console.warn('command to make it work.')
    console.warn('You need also install all required dependencies on your system.')
    console.warn('=================================================')
}

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
        plugins: [new LiveReloadPlugin({
            appendScriptTag: true,
        })],
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
