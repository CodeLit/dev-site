<script setup>
import BCard from '@components/common/b-Card.vue'
import BCookies from '@layouts/b-Cookies.vue'
import BIcon from '@components/common/b-Icon.vue'
import { mdiArrowUpThick } from '@mdi/js'
import BCircleBg from '@components/b-CircleBg.vue'
import BHeader from '@layouts/b-Header.vue'
import BModalsBackground from '@layouts/b-ModalsBackground.vue'
</script>

<template>
    <div ref='app' :style="{'background-image':$store.getters.getPageImage}"
         class='app w-screen min-h-screen flex flex-col'>
        <b-header class='top-0 left-0' />

        <div v-if="isMobile && $route.name !== 'home'" class="space-above-content h-24"></div>

        <!--        <router-view v-slot='{ Component, route }'>-->
        <!--            <transition :name="route.meta.transition || 'fade'" mode='out-in'>-->
        <!--                <component :is='Component' :key="route.path" class="page h-100 flex flex-col" />-->
        <!--            </transition>-->
        <!--        </router-view>-->

        <slot />

        <b-circle-bg class='left-20 sm:left-56 top-10 sm:top-72 rotate-45' />

        <b-circle-bg
            class='right-20 sm:right-56 top-96 sm:top-20'
            style='transform: rotate(225deg)'
        />

        <b-cookies />

        <transition name='fade'>
            <div v-if='isArrowUpVisible' class='up-scroller_wrapper relative'>
                <b-card
                    class='up-scroller z-10 w-fit ml-auto cursor-pointer select-none text-xl flex items-center justify-center'
                    @click='scrollToTop()'>
                    <b-icon :path='mdiArrowUpThick()' class="w-8 h-8"></b-icon>
                </b-card>
            </div>
        </transition>

        <b-modals-background />
    </div>
</template>

<script>

export default {
    data() {
        return {
            windowTop: 0,
        }
    },
    methods: {
        mdiArrowUpThick() {
            return mdiArrowUpThick
        },
        scrollToTop() {
            $('body')[0].scrollIntoView({ block: 'start', behavior: 'smooth' })
        },
        onScroll() {
            this.windowTop = window.top.scrollY
        },
    },
    computed: {
        isArrowUpVisible() {
            return (this.windowTop > window.innerHeight * 1.5)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
}
</script>

<style lang='scss' scoped>
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
        float: right;
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
    opacity: 0
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
