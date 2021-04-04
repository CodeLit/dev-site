import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [],
        pages: {
            home: {
                title: 'Обо мне',
            },
            'my-works': {
                title: 'Мои работы',
            },
            reviews: {
                title: 'Собеседования',
            },
            tech: {
                title: 'Технологии',
            },
        },
        homePage: 'home',
        currentPage: 'home',
    },
    getters: {
        getQuestions({ questions }) {
            return questions
        },
        getCurrentPage: ({ currentPage, homePage }) => {
            return currentPage || homePage
        },
        getPages: ({ pages }) => {
            return pages
        },
    },
    actions: {
        ajaxQuestionsFromDB({ commit }) {
            axios
                .get('api/questions')
                .then(responce => {
                    console.log(responce.data.questions)
                    commit('setCategories', responce.data.questions)
                })
                .catch(error => console.log('Ошибка!', error))
        },
    },
    mutations: {
        setQuestions(state, data) {
            return (state.questions = data)
        },
        setCurrentPage(state, data) {
            return (state.currentPage = data)
        },
    },
})
