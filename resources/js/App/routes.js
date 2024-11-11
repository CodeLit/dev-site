import { router, usePage } from '@inertiajs/vue3'

export const getCurrentRoute = () => {
    const page = usePage()
    const pathname = new URL(page.props.ziggy.location).pathname
    if (pathname === '/') {
        return routes.find((route) => route.name === 'home')
    }
    const currentUri = pathname.replace(/^\/+/, '')
    const currentRouteName = Object.entries(page.props.ziggy.routes).find(
        ([, route]) => route.uri === currentUri,
    )?.[0] || null
    if (!currentRouteName) {
        return null
    }
    return routes.find((route) => route.name === currentRouteName)
}

export const isActiveRoute = (routeName) => {
    return getCurrentRoute().name === routeName
}

export const changePage = (routePath) => {
    const page = usePage()
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
