import '../scss/app.scss'
import { createApp } from 'vue'
import Popper from 'popper.js'
import cash from 'cash-dom'
import lodash from 'lodash'
import './font-awesome'

import axios from 'axios'

import 'es6-promise/auto' // for old browsers
import store from './store' // vuex
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import VueLazyLoading from 'vue-lazy-loading'
import BApp from '@v/b-App.vue'

import { i18nVue, loadLanguageAsync } from 'laravel-vue-i18n'
import globalMixins from './mixins/globalMixins'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import.meta.glob([
    '../img/**',
    '../fonts/**',
])

try {
    window._ = lodash
    window.Popper = Popper
    window.$ = cash
    window.axios = axios
} catch (e) {
    console.error('Libraries importing error!', e.message)
}

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(BApp)
app.use(router)
app.use(store)
app.use(i18nVue, {
    resolve: lang => import(`../lang/${lang}.json`),
})
app.use(VueLazyLoading)
app.mixin(globalMixins)

let lang = $('html').attr('lang')

const vuetify = createVuetify({
    components,
    directives,
})

loadLanguageAsync(lang).then(() => {
    app.use(vuetify).mount('#app')
})
