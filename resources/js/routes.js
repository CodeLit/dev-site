import bHome from "./components/pages/b-Home";
import bLearn from "./components/pages/b-Learn";
import bDocuments from './components/pages/b-Documents'
import bMyWorks from './components/pages/b-MyProjects'
import bReviews from './components/pages/b-Reviews'

export default [
    {
        path: '/',
        text: 'Обо мне',
        name: 'home',
        component: bHome,
        header_absolute: true,
    },
    {
        path: '/my-projects',
        text: 'Мои работы',
        component: bMyWorks,
    },
    // {
    //     path: '/reviews',
    //     text: 'Собеседования',
    //     component: bReviews
    // },
    {
        path: '/documents',
        text: 'Документы',
        component: bDocuments
    },
    // {
    //     path: '/learning',
    //     text: 'Обучение',
    //     component: bLearn
    // }
]
