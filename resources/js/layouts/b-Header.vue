<template>
    <header :class="[{ 'absolute':  (getCurrentRouteParams['header_absolute']||isMobile)}]"
            class='w-full py-2 px-4 md:p-7 z-10'>
        <b-nav-mobile v-if='isMobile'></b-nav-mobile>
        <b-nav v-else></b-nav>
    </header>
</template>

<script>
import BNavMobile from './b-NavMobile.vue'
import BNav from './b-Nav.vue'
import { getCurrentRouteParams, isMobile } from '@/app/helpers.js'

export default {
    methods: { isMobile, getCurrentRouteParams },
    components: { BNav, BNavMobile },
}
</script>

<style scoped>
@media screen and (max-width: 770px) {
    header {
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>
