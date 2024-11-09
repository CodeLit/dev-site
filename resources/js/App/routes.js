import bHome from '@pages/b-Home.vue'
import bDocuments from '@pages/b-Documents.vue'
import bMyWorks from '@pages/b-MyProjects.vue'

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
