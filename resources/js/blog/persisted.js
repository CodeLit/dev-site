const homePage = 'home'

const state = {
    currentPage: '',
}

const mutations = {
    setCurrentPage(state, page) {
        state.currentPage = page
    },
}

const getters = {
    getCurrentPage: ({ currentPage }) => {
        return currentPage != '' ? currentPage : homePage
    },
}

export default {
    state,
    mutations,
    getters,
}
