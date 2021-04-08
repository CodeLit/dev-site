import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import persisted from './persisted'

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
    },
    getters: {
        getQuestions({ questions }) {
            return questions
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
                    commit('setQuestions', responce.data.questions)
                })
                .catch(error => console.log('Ошибка!', error))
        },
    },
    mutations: {
        setQuestions(state, data) {
            return (state.questions = data)
        },
    },
    modules: {
        persisted,
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 3 }),
                removeItem: key => Cookies.remove(key),
            },
        }),
    ],
})
