<template>
    <iframe v-lazy="src" loading="lazy" class="document"></iframe>
</template>
<script>
export default {
    props: ['src']
}
</script>
<style scoped>
.document{
    height: 500px;
    width: 100%;
    touch-action: none;
}
</style>
