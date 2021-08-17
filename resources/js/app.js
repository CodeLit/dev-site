import Vue from "vue";
import Popper from "popper.js";
import cash from "cash-dom/dist/cash";
import {lodash} from "lodash/seq";

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
    window._ = require('lodash')
    window.Popper = require('popper.js').default
    window.$ = require('cash-dom')
} catch (e) {}

window.Vue = require('vue').default

import axios from "axios";

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

import './font-awesome'

Vue.config.ignoredElements = [/^ion-/]

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
    Vue.component(componentName, componentConfig.default || componentConfig)
})

import 'es6-promise/auto' // для старых браузеров

import store from './blog' // vuex

import VueRouter from "vue-router";

Vue.use(VueRouter)

import routes from "./routes";

const router = new VueRouter({routes})

new Vue({
    el: '#app',
    store,
    router
})
