<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import BCard from '@components/common/b-Card.vue'
import BCookies from '@sections/CookiesModal.vue'
import BIcon from '@components/common/b-Icon.vue'
import { mdiArrowUpThick } from '@mdi/js'
import BCircleBg from '@components/b-CircleBg.vue'
import BHeader from '@sections/Header.vue'
import BModalsBackground from '@layouts/b-ModalsBackground.vue'
import { Head } from '@inertiajs/vue3'
import { useDevSiteStore } from '@/App/store.js'
import { getCurrentRoute } from '@/App/routes.js'
import { importImg, isMobile } from '@/App/helpers.js'
import BFooter from '@layouts/Footer.vue'

const devSiteStore = useDevSiteStore()
const appRef = ref(null)
const windowTop = ref(0)
const isArrowUpVisible = computed(() => {
    if (typeof window === 'undefined') return false
    return windowTop.value > window.innerHeight * 1.5
})
const scrollToTop = () => document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })

function onScroll() {
    if (typeof window === 'undefined') return
    windowTop.value = window.scrollY
}

onMounted(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <Head>
        <link :href="importImg('/favicon/favicon.png')" rel="icon" type="image/x-icon" />
    </Head>
    <div ref="appRef" :style="{ 'background-image': devSiteStore.getPageImage }"
         class="app w-screen min-h-screen flex flex-col">

    <b-header class="top-0 left-0" />

        <div v-if="isMobile() && getCurrentRoute().name !== 'home'" class="space-above-content h-24"></div>

        <transition appear mode="out-in" name="fade">
            <slot />
        </transition>

        <bFooter :blurred="getCurrentRoute().name === 'my-works'"
                 :class="getCurrentRoute().name === 'my-works' ? 'mt-auto' : ''" />

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
