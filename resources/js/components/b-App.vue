<template>
    <div class="w-full sm:w-auto">
        <component :is="'b-' + getCurrentPage + '-page'"></component>

        <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />

        <b-circle-bg
            class="right-20 sm:right-56 top-96 sm:top-20"
            style="transform: rotate(225deg)"
        />
        <b-card
            v-if="!isCookiesAccepted"
            class="fixed flex place-items-center left-2 bottom-2 px-5 py-3"
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
                <div class="flex justify-between">
                    <b-button class="px-3 py-1" @click.native="acceptCookies"
                        >Хорошо</b-button
                    >
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import bCircle from './b-Circle.vue'
import BRoundBox from './b-RoundBox.vue'
import cookiesImg from '../../images/cookies.png'
export default {
    components: { bCircle, BRoundBox },
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
