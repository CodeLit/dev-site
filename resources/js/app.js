import '../scss/app.scss'
import { createApp, h } from 'vue'
import cash from 'cash-dom'
import './App/font-awesome.js'
import axios from 'axios'
import 'es6-promise/auto' // for old browsers
import store from './App/store.js' // vuex
import { createInertiaApp } from '@inertiajs/vue3'
// import VueLazyLoading from 'vue-lazy-loading'
import AppLayout from '@layouts/b-App.vue'
import mixins from './App/mixins.js'

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


// const router = new createRouter({
//     history: createWebHistory(),
//     routes,
// })

createInertiaApp({
    id: 'app',
    // title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: name => {
        const pages = import.meta.glob('../vue/pages/**/*.vue', { eager: true })
        let page = pages[`../vue/pages/${name}.vue`]

        page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        let app = createApp({ render: () => h(App, props) })
            // .use(router)
            .use(store)
            // .use(i18nVue, {
            //     resolve: lang => import(`../lang/${lang}.json`),
            // })
            // .use(VueLazyLoading)
            .mixin(mixins)


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

        return app.mount(el)
    },
    // progress: {
    //     delay: 250,
    //     color: '#00ffd1',
    //     includeCSS: true,
    //     showSpinner: true,
    // },
}).then(() => {
    console.log(`App ${appName} is created.`)
})
