import bHome from '@js/pages/HomePage.vue'
import bDocuments from '@/pages/DocumentsPage.vue'
import bMyWorks from '@/pages/MyProjectsPage.vue'
import { route } from 'ziggy-js'

export const routes = [
    {
        path: route('home'),
        trans: 'common.about_me',
        name: 'home',
        component: bHome,
        header_absolute: true,
        meta: { transition: 'fade' },
    },
    {
        path: route('my-works'),
        trans: 'common.my_projects',
        component: bMyWorks,
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
    },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    //     component: bLearn
    // }
]
