import '../scss/app.scss'
import { createApp, h } from 'vue'
import cash from 'cash-dom'
import './app/font-awesome.js'
import axios from 'axios'
import 'es6-promise/auto' // for old browsers
import { createInertiaApp } from '@inertiajs/vue3'
import AppLayout from '@js/layouts/b-App.vue'
import { createPinia } from 'pinia'
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const appName = import.meta.env.VITE_APP_NAME || 'Dev Site'

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
        // let lang = $('html').attr('lang')
        //
        // const vuetify = createVuetify({
        //     components,
        //     directives,
        // })
        //
        // loadLanguageAsync(lang).then(() => {
        //     app.use(vuetify)
        // })

        return createApp({ render: () => h(App, props) })
            // .use(i18nVue, {
            //     resolve: lang => import(`../lang/${lang}.json`),
            // })
            // .use(VueLazyLoading)
            .use(createPinia())
            .mount(el)
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
