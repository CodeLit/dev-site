import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import i18n from 'laravel-vue-i18n/vite'
import vuetify from 'vite-plugin-vuetify'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        },
        strictPort: true,
        watch: { // For docker livereload
            usePolling: true,
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: false,
                    includeAbsolute: false,
                },
                compilerOptions: {
                    isCustomElement: (tag) => /^v-/.test(tag),
                },
            },
        }),
        i18n('resources/lang'),
        vuetify({ autoImport: true }),
        ViteImageOptimizer({
            gifsicle: { optimizationLevel: 7 },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 75 },
            pngquant: { quality: [0.65, 0.8], speed: 4 },
            png: { quality: 80 },
            jpeg: { quality: 75 },
            webp: { quality: 75 },
            avif: { quality: 70 },
            svg: {
                plugins: [
                    { name: 'removeViewBox' },
                    { name: 'removeEmptyAttrs', active: false },
                    { name: 'removeViewBox', active: false },
                    { name: 'sortAttrs' },
                ],
            },
        }),
    ],
    ssr: {
        noExternal: ['vuetify'],
    },
    resolve: {
        alias: [
            { find: '@resources', replacement: fileURLToPath(new URL('./resources', import.meta.url)) },
            { find: '@img', replacement: fileURLToPath(new URL('./resources/img', import.meta.url)) },
            { find: '@scss', replacement: fileURLToPath(new URL('./resources/scss', import.meta.url)) },
            { find: '@js', replacement: fileURLToPath(new URL('./resources/js', import.meta.url)) },
            { find: '@', replacement: fileURLToPath(new URL('./resources/js', import.meta.url)) },
            // Don't create @vue because it's conflicts with node_modules
            { find: '@v', replacement: fileURLToPath(new URL('./resources/js', import.meta.url)) },
            { find: '@layouts', replacement: fileURLToPath(new URL('./resources/js/Layouts', import.meta.url)) },
            { find: '@components', replacement: fileURLToPath(new URL('./resources/js/Components', import.meta.url)) },
            { find: '@pages', replacement: fileURLToPath(new URL('./resources/js/Pages', import.meta.url)) },
            { find: '@lang', replacement: fileURLToPath(new URL('./resources/lang', import.meta.url)) },
            { find: '@sections', replacement: fileURLToPath(new URL('./resources/js/Sections', import.meta.url)) },
        ],
    },
    optimizeDeps: {
        include: [],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
})
