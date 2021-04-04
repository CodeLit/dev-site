<template>
    <div class="w-full p-5 sm:p-0 sm:w-auto">
        <component :is="'b-' + getCurrentPage + '-page'"></component>

        <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />

        <b-circle-bg
            class="right-20 sm:right-56 top-96 sm:top-20"
            style="transform: rotate(225deg)"
        />
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
