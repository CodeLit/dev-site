<template>
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
</template>

<script>
export default {
    data() {
        return {
            question: {},
        }
    },
    methods: {
        createQuestion(question) {
            this.$store.dispatch('createQuestion', question)
        },
    },
    computed: {
        isQuestionValid() {
            return this.question.answer && this.question.text
        },
    },
}
</script>
