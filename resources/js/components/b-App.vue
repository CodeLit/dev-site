<template>
    <div class="app w-screen" ref="app" :style="{'background-image':'url('+$store.getters.getPageImage+')'}">

        <b-header class="top-0 left-0" />

        <transition name="scale">
            <router-view />
        </transition>

        <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />

        <b-circle-bg
            class="right-20 sm:right-56 top-96 sm:top-20"
            style="transform: rotate(225deg)"
        />
        <b-card
            v-if="!isCookiesAccepted"
            class="fixed flex place-items-center left-2 bottom-2 px-5 py-3  w-full lg:w-1/2 border-white border-l-2"
        >
            <b-round-box
                width="120px"
                class="mr-3"
                alt="Cookies image"
                :url="cookiesImg"
            />
            <div>
                <h4>Предупреждение.</h4>
                Этот сайт использует
                <a
                    href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas"
                    target="__blank"
                    >печенье</a
                >. Если не любите печенье, то можете его выключить в настройках
                браузера.
                <b-button
                    class="px-3 py-1 inline-block float-right mr-10 "
                    @click.native="acceptCookies"
                    >Хорошо</b-button
                >
            </div>
        </b-card>
    </div>
</template>

<script>
import bCircle from './b-Circle.vue'
import BRoundBox from './b-RoundBox.vue'
import cookiesImg from '../../images/cookies.png'
import BButton from "./b-Button";
export default {
    components: {BButton, bCircle, BRoundBox },
    data() {
        return { cookiesImg }
    },
    methods: {
        acceptCookies() {
            this.$store.commit('acceptCookies')
        },
    },
    computed: {
        getCurrentPage() {
            return this.$store.getters.currentPage
        },
        isCookiesAccepted() {
            return this.$store.getters.cookiesAccepted
        },
    },
}
</script>

<style scoped>
.app {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}


.fade-enter-active,
.fade-leave-active {
    transition-duration: 1s;
    transition-property: opacity;
    transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
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
