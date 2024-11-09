import { defineStore } from 'pinia'
import axios from 'axios'

export const useDevSiteStore = defineStore('devSite', {
    state: () => ({
        questions: [],
        pageImage: 'none',
        openedModalsCount: 0,
    }),
    actions: {
        async ajaxQuestionsFromDB() {
            try {
                const response = await axios.get('/api/questions')
                this.setQuestions(response.data.questions)
            } catch (error) {
                console.log('Ошибка!', error)
            }
        },
        async createQuestion(question) {
            try {
                const response = await axios.post('/api/questions', question)
                await this.createQuestion(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        openModal() {
            this.openedModalsCount++
            $('html').addClass('disable-scrolling')
        },
        closeModal() {
            if (this.openedModalsCount > 0) {
                this.openedModalsCount--
            }
            if (this.openedModalsCount === 0) {
                $('html').removeClass('disable-scrolling')
            }
        },
        closeAllModals() {
            this.openedModalsCount = 0
            $('html').removeClass('disable-scrolling')
        },
        setQuestions(data) {
            this.questions = data
        },
        setPageImage(data) {
            this.pageImage = `url(${data})`
        },
        unsetPageImage() {
            this.pageImage = 'none'
        },
    },
    getters: {
        getTransSuffix() {
            const param = new URLSearchParams(window.location.search)
            const paramName = param.get('name')

            return paramName === 'vitaliy' ? `.${paramName}` : ''
        },
        allQuestions: (state) => state.questions, // Переименован геттер
        getPageImage: (state) => state.pageImage,
    },
})
