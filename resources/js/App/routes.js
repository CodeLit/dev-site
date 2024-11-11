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
    if (routePath === page.props.ziggy.location) {
        return
    }
    router.visit(routePath)
}

export const routes = [
    {
        trans: 'common.about_me',
        name: 'home',
        header_absolute: true,
        meta: { transition: 'fade' },
        empty_title: true,
    },
    {
        trans: 'common.my_projects',
        name: 'my-works',
    },
    {
        trans: 'common.documents',
        name: 'documents',
    },
    // {
    //     trans: 'common.my_projects',
    //     name: 'my-works',
    // },
    // {
    //     path: route('documents'),
    //     trans: 'common.documents',
    //     name: 'documents',
    // },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    // }
    // {
    //     path: '/reviews',
    //     text: 'Собеседования',
    // },
]
