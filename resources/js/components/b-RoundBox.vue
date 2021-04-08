<template>
    <img class="rounded-full bg-cover" :src="url" :alt="alt" />
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
