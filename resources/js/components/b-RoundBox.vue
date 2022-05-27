<template>
    <img class="rounded-full object-cover" :alt="alt" :src="url" />
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
