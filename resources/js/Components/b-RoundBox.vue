<template>
    <img :alt="alt" :src="url" class="rounded-full object-cover" />
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        url: {
            type: String,
        },
        alt: {
            type: String,
            default: 'Round image',
        },
    },
}
</script>
