<template>
    <div>
        <div v-if="getQuestions.length">
            <h1>Вопросы</h1>
            <div v-for="(q, id) in getQuestions" :key="(q, id)">
                <h4>{{ q.text }}</h4>
                <b-card class="px-7 py-4">
                    {{ q.answer }}
                </b-card>
                <p class="text-sm">{{ q.company }}</p>
            </div>
        </div>

        <form
            @submit="createQuestion(question)"
            class="flex flex-col place-items-center"
        >
            <input v-model="question.company" placeholder="Кампания" />
            <textarea
                v-model="question.text"
                placeholder="Текст вопроса"
                cols="50"
                rows="5"
            ></textarea>
            <textarea
                v-model="question.answer"
                placeholder="Ответ"
                cols="50"
                rows="5"
            ></textarea>
            <b-button
                :disabled="!isQuestionValid"
                @click.prevent="createQuestion(question)"
                class="my-5 w-1/2"
                >Добавить вопрос</b-button
            >
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: {},
            q_company: '',
            q_answer: '',
            q_text: '',
        }
    },
    mounted() {
        this.$store.dispatch('ajaxQuestionsFromDB')
    },
    computed: {
        getQuestions() {
            return this.$store.getters.questions
        },
        isQuestionValid() {
            return this.question.answer && this.question.text
        },
    },
    methods: {
        createQuestion(question) {
            this.$store.dispatch('createQuestion', question)
        },
    },
}
</script>
