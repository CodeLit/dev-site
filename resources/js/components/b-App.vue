<template xmlns="http://www.w3.org/1999/html">
    <div class="app w-screen" ref="app" :style="{'background-image':$store.getters.getPageImage}">
        <b-header class="top-0 left-0" />

        <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />

        <b-circle-bg
            class="right-20 sm:right-56 top-96 sm:top-20"
            style="transform: rotate(225deg)"
        />
        <b-card
            v-if="!cookiesAccepted"
            class="fixed flex place-items-center left-2 bottom-2 px-5 py-3  w-full lg:w-1/2 border-white border-l-2"
        >
            <b-round-box
                width="120"
                class="mr-3"
                alt="Cookies image"
                url="/images/cookies.png"
            />
            <div>
                <h4>{{ $t('common.warning') }}.</h4>
                {{ $t('common.this_site_uses') }}
                <a
                    href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas"
                    target="__blank"
                    >{{ $t('common.cookies') }}</a
                >. {{ $t('common.dont_like_cookies') }}.
                <b-button
                    class="px-3 py-1 inline-block float-right mr-10 "
                    @click.native="acceptCookies"
                    >{{ $t('common.okay_fine') }}</b-button
                >
            </div>
        </b-card>
        <transition name="fade" class="up-scroller sticky">
            <b-card v-if="isArrowUpVisible" @click="scrollToTop()"
                    class="p-9 z-10 w-fit ml-auto cursor-pointer select-none"></b-card>
        </transition>
    </div>
</template>

<script>
import bCircle from './b-Circle.vue'
import BRoundBox from './b-RoundBox.vue'
import BButton from "./b-Button";
import Cookies from "js-cookie";
import BCard from "./b-Card";
export default {
    components: {BCard, BButton, bCircle, BRoundBox },
    data() {
        return {
            cookiesAccepted: false,
            windowTop: 0,
        }
    },
    methods: {
        acceptCookies() {
            Cookies.set('cookiesAccepted', true, { expires: 3 })
            this.cookiesAccepted = true
        },
        scrollToTop(){
            $('body')[0].scrollIntoView({block: 'start', behavior: 'smooth'})
        },
        onScroll(e) {
            this.windowTop = window.top.scrollY
        }
    },
    computed: {
        isArrowUpVisible(){
            return (this.windowTop > window.innerHeight*1.5)
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
        this.cookiesAccepted =  Cookies.get('cookiesAccepted')
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
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

.up-scroller {
    right: 2rem;
    bottom: 2rem;
    border: white solid 1px;
    border-radius: 50%;
}

.up-scroller:before{
    content: '⇧';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 2rem;
    font-weight: bold;
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
