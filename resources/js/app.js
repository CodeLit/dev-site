import '@scss/app.scss'
import { createApp, h } from 'vue'
import cash from 'cash-dom'
import './app/font-awesome.js'
import axios from 'axios'
import 'es6-promise/auto' // for old browsers
import { createInertiaApp } from '@inertiajs/vue3'
import AppLayout from '@js/layouts/b-App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueLazyLoading from 'vue-lazy-loading'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// End Vuetify
import { loadLanguageAsync } from 'laravel-vue-i18n'

const appName = import.meta.env.VITE_APP_NAME || 'Dev Site'

import.meta.glob([
    '../img/**',
    '../fonts/**',
])


const vuetify = createVuetify({
    components,
    directives,
})

try {
    window.$ = cash
    window.axios = axios
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
} catch (e) {
    console.error('Libraries importing error!', e.message)
}

createInertiaApp({
    id: 'app',
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        let page = pages[`./pages/${name}.vue`]
        page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        let lang = $('html').attr('lang')

        loadLanguageAsync(lang).then(() => {
            console.log(`Language ${lang} is loaded.`)
        })

        let app = createApp({ render: () => h(App, props) })
            .use(createI18n({
                locale: navigator.language.slice(0, 2),
                fallbackLocale: 'en',
                legacy: false,
                resolve: lang => import(`../lang/${lang}.json`),
            }))
            .use(VueLazyLoading)
            .use(createPinia())
            .use(vuetify)

        return app.mount(el)
    },
    progress: {
        delay: 250,
        color: '#32166BFF',
        includeCSS: true,
        showSpinner: true,
    },
}).then(() => {
    console.log(`App ${appName} is created.`)
})
