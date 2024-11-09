<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import BCard from '@js/components/common/b-Card.vue'
import BCookies from '@sections/b-Cookies.vue'
import BIcon from '@js/components/common/b-Icon.vue'
import { mdiArrowUpThick } from '@mdi/js'
import BCircleBg from '@js/components/b-CircleBg.vue'
import BHeader from '@sections/b-Header.vue'
import BModalsBackground from '@js/layouts/b-ModalsBackground.vue'
// import { Head } from '@inertiajs/vue3'
import { useDevSiteStore } from '@js/App/store.js'
// import { importImg } from '@/app/helpers.js'

const devSiteStore = useDevSiteStore()
const appRef = ref(null)
const windowTop = ref(0)
const isArrowUpVisible = computed(() => windowTop.value > window.innerHeight * 1.5)
const scrollToTop = () => document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })

function onScroll() {
    windowTop.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div ref="appRef" :style="{ 'background-image': devSiteStore.getPageImage }"
         class="app w-screen min-h-screen flex flex-col">
        <!--        <Head>-->
        <!--            <link :href="importImg('/favicon/favicon.ico')" rel="icon" type="image/x-icon" />-->
        <!--        </Head>-->
        <b-header class="top-0 left-0" />

        <!--        <div v-if="isMobile && $route.name !== 'home'" class="space-above-content h-24"></div>-->

        <slot />

        <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />
        <b-circle-bg class="right-20 sm:right-56 top-96 sm:top-20" style="transform: rotate(225deg)" />

        <b-cookies />

        <transition name="fade">
            <div v-if="isArrowUpVisible" class="up-scroller_wrapper relative">
                <b-card
                    class="up-scroller z-10 w-fit ml-auto cursor-pointer select-none text-xl flex items-center justify-center"
                    @click="scrollToTop">
                    <b-icon :path="mdiArrowUpThick" class="w-8 h-8"></b-icon>
                </b-card>
            </div>
        </transition>

        <b-modals-background />
    </div>
</template>

<style lang="scss" scoped>
.app {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.up-scroller_wrapper {
    height: 1px;
    position: sticky;
    right: 25px;
    bottom: 25px;
    width: 100%;

    .up-scroller {
        position: absolute;
        right: 0;
        bottom: 0;
        border: white solid 1px;
        border-radius: 50%;
        transform: translatex(-2rem);
        height: 5rem;
        width: 5rem;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        right: 10px;
        bottom: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
