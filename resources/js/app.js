import '@scss/app.scss'
import { createSSRApp, h } from 'vue'
import cash from 'cash-dom'
import './App/font-awesome.js'
import axios from 'axios'
import 'es6-promise/auto' // for old browsers
import { createInertiaApp } from '@inertiajs/vue3'
import AppLayout from '@layouts/AppLayout.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueLazyLoading from 'vue-lazy-loading'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Glob import for assets
import.meta.glob([
    '../img/**',
    '../fonts/**',
])

try {
    window.$ = cash
    window.axios = axios
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
} catch (e) {
    console.error('Libraries importing error!', e.message)
}

// Start languages/locales
const messages = {}
const localeFiles = import.meta.glob('@lang/php_*.json', { eager: true })

for (const path in localeFiles) {
    const match = path.match(/php_([^/]+)\.json$/)
    if (match) {
        const locale = match[1]
        messages[locale] = localeFiles[path].default || localeFiles[path]
    }
}

const i18n = createI18n({
    locale: $('html').attr('lang') || navigator.language.slice(0, 2) || 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages,
})
// End languages/locales

const vuetify = createVuetify({
    components,
    directives,
})

createInertiaApp({
    id: 'app',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(VueLazyLoading)
            .use(createPinia())
            .use(vuetify)
            .mount(el)
    },
    progress: {
        delay: 250,
        color: '#32166BFF',
        includeCSS: true,
        showSpinner: true,
    },
}).then(() => {
    // console.log(`App ${appName} is created.`)
})
