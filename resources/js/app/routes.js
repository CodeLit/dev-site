import bHome from '@js/pages/HomePage.vue'
import bDocuments from '@/pages/DocumentsPage.vue'
import bMyWorks from '@/pages/MyProjectsPage.vue'
import { route } from 'ziggy-js'
import { router } from '@inertiajs/vue3'

export const getCurrentRoute = () => {
    return routes.find(r => r.name === route().current())
}

export const isActiveRoute = (routeName) => route().current(routeName)

export const changePage = (routePath) => {
    router.visit(routePath)
}

export const routes = [
    {
        trans: 'common.about_me',
        name: 'home',
        component: bHome,
        header_absolute: true,
        meta: { transition: 'fade' },
    },
    {
        trans: 'common.my_projects',
        component: bMyWorks,
        name: 'my-works',
    },
    // {
    //     path: '/reviews',
    //     text: 'Собеседования',
    //     component: bReviews
    // },
    {
        path: route('documents'),
        trans: 'common.documents',
        component: bDocuments,
        name: 'documents',
    },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    //     component: bLearn
    // }
]
