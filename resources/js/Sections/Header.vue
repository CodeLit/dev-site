<script setup>
import { computed } from 'vue'
import BNavMobile from '@sections/NavMobile.vue'
import BNav from '@sections/Nav.vue'
import { isMobile } from '@/App/helpers.js'
import { getCurrentRoute } from '@/App/routes.js'


const headerClass = computed(() => {
    const currentRoute = getCurrentRoute()
    return {
        'absolute': currentRoute.header_absolute || isMobile(),
    }
})
</script>

<template>
    <header :class="[headerClass, 'w-full py-2 px-4 md:p-7 z-10']">
        <b-nav-mobile v-if="isMobile()" />
        <b-nav v-else />
    </header>
</template>

<style scoped>
@media screen and (max-width: 770px) {
    header {
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>
