<script setup>

</script>

<template>
    <div v-if="openedModalsCount > 0" class="modals-background" @click="$store.commit('closeAllModals')"></div>
</template>

<script>
export default {
    computed: {
        openedModalsCount() {
            return this.$store.state.openedModalsCount
        },
    },
}
</script>

<style lang="scss" scoped>
.modals-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}
</style>
