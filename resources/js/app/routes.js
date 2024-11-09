import bHome from '@js/pages/HomePage.vue'
import bDocuments from '@/pages/DocumentsPage.vue'
import bMyWorks from '@/pages/MyProjectsPage.vue'

export default [
    {
        path: '/',
        trans: 'common.about_me',
        name: 'home',
        component: bHome,
        header_absolute: true,
        meta: { transition: 'fade' },
    },
    {
        path: '/my-projects',
        trans: 'common.my_projects',
        component: bMyWorks,
    },
    // {
    //     path: '/reviews',
    //     text: 'Собеседования',
    //     component: bReviews
    // },
    {
        path: '/documents',
        trans: 'common.documents',
        component: bDocuments,
    },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    //     component: bLearn
    // }
]
