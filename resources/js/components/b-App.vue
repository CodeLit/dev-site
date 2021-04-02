<template>
  <div>
    <b-header class="mb-10"></b-header>
    <component :is="'b-' + getCurrentPage + '-page'"></component>
  </div>
</template>
<script>
export default {
  computed: {
    getCurrentPage() {
      return this.$store.state.currentPage
    },
  },
}
</script>
