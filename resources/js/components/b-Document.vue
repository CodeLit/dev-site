<template>
    <iframe v-lazy="src" loading="lazy" class="w-full" style="height: 27rem"></iframe>
</template>
<script>
export default {
    props: ['src']
}
</script>
