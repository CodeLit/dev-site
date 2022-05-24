import bHome from "./components/pages/b-Home";
import bLearn from "./components/pages/b-Learn";
import bDocuments from './components/pages/b-Documents'
import bMyWorks from './components/pages/b-MyProjects'
import bReviews from './components/pages/b-Reviews'

export default [
    {
        path: '/',
        trans: 'common.about_me',
        name: 'home',
        component: bHome,
        header_absolute: true,
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
        component: bDocuments
    },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    //     component: bLearn
    // }
]
