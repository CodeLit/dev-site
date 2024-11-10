import bHome from '@js/pages/HomePage.vue'
import bDocuments from '@/pages/DocumentsPage.vue'
import bMyWorks from '@/pages/MyProjectsPage.vue'
import { route } from 'ziggy-js'
import { router, usePage } from '@inertiajs/vue3'

const page = usePage()

export const getCurrentRoute = () => {
    return routes.find(r => route(r.name) === page.props.ziggy.location)
}

export const isActiveRoute = (routeName) => {
    return getCurrentRoute().name === routeName
}

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
