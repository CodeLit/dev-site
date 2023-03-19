import { createApp } from 'vue'
import Popper from 'popper.js'
import cash from 'cash-dom'
import lodash from 'lodash'
import './font-awesome'

import 'es6-promise/auto' // для старых браузеров
import store from './store' // vuex
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import VueLazyLoading from 'vue-lazy-loading'
import BApp from './components/b-App'


import { i18nVue, loadLanguageAsync } from 'laravel-vue-i18n'

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
    window._ = lodash
    window.Popper = Popper
    window.$ = cash
} catch (e) {
    console.error('Ошибка импорта библиотек!', e.message)
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(BApp)
app.use(router)
app.use(store)
app.use(i18nVue,{
    resolve: lang => import(`../lang/${lang}.json`),
})
app.use(VueLazyLoading)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const requireComponent = require.context('./components', true, /\.vue$/i)

requireComponent.keys().forEach(fileName => {
    // Получение конфигурации компонента
    const componentConfig = requireComponent(fileName)
    // Получение имени компонента
    const componentName = _.kebabCase(
        fileName
            .split('/')
            .pop()
            .split('.')[0]
    )
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    app.component(componentName, componentConfig.default || componentConfig)
})

let lang = $('html').attr('lang')

loadLanguageAsync(lang).then(r => {
    app.mount('#app')
})
