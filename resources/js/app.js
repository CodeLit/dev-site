import './bootstrap'

window.Vue = require('vue').default

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

import blog from './blog' // vuex

// Vue.component(
//     'example-component',
//     require('./components/ExampleComponent.vue').default
// )

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    el: '#app',
    store: blog,
})
