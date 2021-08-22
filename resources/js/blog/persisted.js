export default {
    state: {
        cookiesAccepted: false,
        questions: [],
    },
    actions: {
        ajaxQuestionsFromDB({ commit }) {
            axios
                .get('api/questions')
                .then(responce => {
                    commit('setQuestions', responce.data.questions)
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
                item => item.id === question.id
            )
            state.questions.splice(index, 1)
        },
        setCurrentPage(state, page) {
            state.currentPage = page
        },
        acceptCookies(state) {
            state.cookiesAccepted = true
        },
        setQuestions(state, data) {
            return (state.questions = data)
        }
    },
    getters: {
        cookiesAccepted({ cookiesAccepted }) {
            return cookiesAccepted
        },
        questions({ questions }) {
            return questions
        },
    },
}
