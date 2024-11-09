<script setup>
import { computed } from 'vue'
import BNavMobile from '@layouts/b-NavMobile.vue'
import BNav from '@sections/b-Nav.vue'
import { isMobile } from '@/app/helpers.js'
import { getCurrentRoute } from '@/app/routes.js'


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
