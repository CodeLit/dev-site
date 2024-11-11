import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import AppLayout from '@layouts/AppLayout.vue'
import { createPinia } from 'pinia'
import VueLazyLoading from 'vue-lazy-loading'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify()

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
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages,
})

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            const page = pages[`./Pages/${name}.vue`]
            page.default.layout = page.default.layout || AppLayout
            return page
        },
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(i18n)
                .use(createPinia())
                .use(vuetify)
                .use(VueLazyLoading)
        },
    })
)
