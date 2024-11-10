<script setup>
import { computed, ref } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import BButton from '@components/common/b-Button.vue'

const question = ref({
    company: '',
    text: '',
    answer: '',
})

const devSiteStore = useDevSiteStore()

const createQuestion = () => {
    devSiteStore.createQuestion(question.value)
    question.value = { company: '', text: '', answer: '' }
}

const isQuestionValid = computed(() => {
    return question.value.answer && question.value.text
})
</script>

<template>
    <form class="flex flex-col place-items-center" @submit.prevent="createQuestion">
        <input v-model="question.company" placeholder="Кампания" />
        <textarea v-model="question.text" cols="50" placeholder="Текст вопроса" rows="5"></textarea>
        <textarea v-model="question.answer" cols="50" placeholder="Ответ" rows="5"></textarea>
        <b-button :disabled="!isQuestionValid" class="my-5 w-1/2" @click.prevent="createQuestion">
            Добавить вопрос
        </b-button>
    </form>
</template>

<style scoped>

</style>
