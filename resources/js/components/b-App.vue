<template>
    <div ref='app' :style="{'background-image':$store.getters.getPageImage}" class='app w-screen'>
        <b-header class='top-0 left-0' />

        <router-view v-slot='{ Component, route }'>
            <transition :name="route.meta.transition || 'fade'" mode='out-in'>
                <component :is='Component' :key="route.path" />
            </transition>
        </router-view>

        <b-circle-bg class='left-20 sm:left-56 top-10 sm:top-72 rotate-45' />

        <b-circle-bg
            class='right-20 sm:right-56 top-96 sm:top-20'
            style='transform: rotate(225deg)'
        />

        <b-cookies />

        <transition name='fade'>
            <div v-if='isArrowUpVisible' class='up-scroller_wrapper'>
                <div class='relative'>
                    <b-card class='up-scroller z-10 w-fit ml-auto cursor-pointer select-none'
                            @click='scrollToTop()'>
                        ⇧
                    </b-card>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import bCircle from './b-Circle.vue'
import BRoundBox from './b-RoundBox.vue'
import BButton from './common/b-Button.vue'
import BCard from './b-Card'
import BFooter from './layouts/b-Footer.vue'
import BCookies from './layouts/b-Cookies.vue'

export default {
    components: { BCookies, BFooter, BCard, BButton, bCircle, BRoundBox },
    data() {
        return {
            windowTop: 0,
        }
    },
    methods: {
        scrollToTop() {
            $('body')[0].scrollIntoView({ block: 'start', behavior: 'smooth' })
        },
        onScroll(e) {
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

    .up-scroller {
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        border: white solid 1px;
        border-radius: 50%;
        float: right;
        transform: translatex(-2rem);
        height: 5rem;
        width: 5rem;
        font-size: 2rem;
        font-weight: bold;
        line-height: 4.8rem;
        text-align: center;
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
