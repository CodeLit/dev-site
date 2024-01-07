import { createStore } from 'vuex'

export default createStore({
    state: {
        questions: [],
        pageImage: 'none',
    },
    actions: {
        ajaxQuestionsFromDB({ commit }) {
            axios
                .get('api/questions')
                .then(response => {
                    commit('setQuestions', response.data.questions)
                })
                .catch(error => console.log('Ошибка!', error))
        },
        createQuestion({ commit }, question) {
            axios
                .post('/api/questions', question)
                .then(res => {
                    commit('createQuestion', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mutations: {
        createQuestion(state, question) {
            state.questions.unshift(question)
        },
        deleteQuestion(state, question) {
            let index = state.questions.findIndex(
                item => item.id === question.id,
            )
            state.questions.splice(index, 1)
        },
        setQuestions(state, data) {
            return (state.questions = data)
        },
        setPageImage(state, data) {
            state.pageImage = 'url(' + data + ')'
        },
        unsetPageImage(state) {
            state.pageImage = 'none'
        },

    },
    getters: {
        getTransSuffix() {
            let param = new URLSearchParams(window.location.search)
            let paramName = param.get('name')

            switch (paramName) {
                case 'vitaliy':
                    return '.' + paramName
                default:
                    return ''
            }
        },
        questions({ questions }) {
            return questions
        },
        getPageImage({ pageImage }) {
            return pageImage
        },
    },
})
