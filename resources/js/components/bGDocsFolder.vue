<template>
    <iframe :src='src' class='g-frame'></iframe>
</template>

<script>
export default {
    name: 'b-Documents',
    props: ['src'],
}
</script>

<style scoped>
.g-frame {
    width: 100%;
    min-height: 500px;
    border: 0;
}
</style>
