<template>
    <a :href="url" :target="blank ? `_blank` : ``" class="text-center"
    >
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '#',
        },
        blank: Boolean,
    },
}
</script>
