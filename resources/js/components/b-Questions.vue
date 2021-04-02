<template>
  <ul>
    <li :v-for="question in getQuestions">
      {{ question.id }}
      <h4>{{ question.text }}</h4>
      <p>{{ question.answer }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    this.$blog.dispatch("ajaxQuestionsFromDB");
  },
  computed: {
    getQuestions() {
      return this.$blog.getQuestions;
    },
  },
};
</script>
