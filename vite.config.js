import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import i18n from 'laravel-vue-i18n/vite'

export default defineConfig({
    server: {
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
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: false,
                    includeAbsolute: false,
                },
            },
        }),
        i18n('resources/lang'),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./resources', import.meta.url)) },
            { find: '@img', replacement: fileURLToPath(new URL('./resources/img', import.meta.url)) },
            { find: '@scss', replacement: fileURLToPath(new URL('./resources/scss', import.meta.url)) },
            { find: '@js', replacement: fileURLToPath(new URL('./resources/js', import.meta.url)) },
            // Don't create @vue because it's conflicts with node_modules
            { find: '@v', replacement: fileURLToPath(new URL('./resources/vue', import.meta.url)) },
            { find: '@layouts', replacement: fileURLToPath(new URL('./resources/vue/layouts', import.meta.url)) },
            { find: '@components', replacement: fileURLToPath(new URL('./resources/vue/components', import.meta.url)) },
            { find: '@pages', replacement: fileURLToPath(new URL('./resources/vue/pages', import.meta.url)) },
        ],
    },
    optimizeDeps: {
        include: [],
    },
})
