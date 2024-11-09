<template>
<span class="icon">
    <i :class="classes"></i> <slot />
</span>
</template>

<script>
export default {
    name: "b-TextIcon",
    props: ['classes']
}
</script>

<style scoped>
.icon {
    word-break: keep-all;
}
</style>
