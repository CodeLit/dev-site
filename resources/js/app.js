import './bootstrap'

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import $ from 'cash-dom'

window.$ = $

Vue.config.ignoredElements = [/^ion-/]

const requireComponent = require.context(
    // Относительный путь до каталога компонентов
    './components',
    // Обрабатывать или нет подкаталоги
    true,
    // Регулярное выражение для определения файлов базовых компонентов
    /b-[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Получение конфигурации компонента
    const componentConfig = requireComponent(fileName)

    // Получение имени компонента в PascalCase
    const componentName = upperFirst(
        camelCase(
            // Получаем имя файла независимо от глубины вложенности
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )
    // console.log(componentName);
    // Глобальная регистрация компонента
    Vue.component(
        componentName,
        // Поиск опций компонента в `.default`, который будет существовать,
        // если компонент экспортирован с помощью `export default`,
        // иначе будет использован корневой уровень модуля.
        componentConfig.default || componentConfig
    )
})

import 'es6-promise/auto' // для старых браузеров

import blog from './blog' // vuex

new Vue({
    el: '#app',
    store: blog,
})
