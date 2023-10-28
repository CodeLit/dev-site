<template>
    <header :class="[{ 'absolute':  (getCurrentRouteParams['header_absolute']||isMobile)}]"
            class='w-full py-2 px-4 md:p-7 z-10'>
        <b-nav-mobile v-if='isMobile'></b-nav-mobile>
        <b-nav v-else></b-nav>
    </header>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 770px) {
    header{
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>
