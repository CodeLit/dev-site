import bHome from "./components/pages/bHome";
import bLearn from "./components/pages/bLearn";
import bDocuments from './components/pages/bDocuments'
import bMyWorks from './components/pages/bMyWorks'
import bReviews from './components/pages/bReviews'

export default [
    {
        path: '/',
        text: 'Обо мне',
        name: 'home',
        component: bHome
    },
    {
        path: '/my-works',
        text: 'Мои работы',
        component: bMyWorks
    },
    {
        path: '/reviews',
        text: 'Собеседования',
        component: bReviews
    },
    {
        path: '/documents',
        text: 'Документы',
        component: bDocuments
    },
    {
        path: '/learning',
        text: 'Обучение',
        component: bLearn
    }
]
