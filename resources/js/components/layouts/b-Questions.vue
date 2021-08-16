<template>
    <div>
        <div v-for="(q, id) in getQuestions" :key="(q, id)">
            <h4>{{ q.text }}</h4>
            <b-card class="px-7 py-4">
                {{ q.answer }}
            </b-card>
            <p class="text-sm">{{ q.company }}</p>
        </div>
        <b-questions-form />
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('ajaxQuestionsFromDB')
    },
    computed: {
        getQuestions() {
            return this.$store.getters.questions
        },
    },
}
</script>
