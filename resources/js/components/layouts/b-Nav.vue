<template>
    <nav class='navbar mt-3 mb-1 flex items-center justify-between'>
        <router-link
            :to="{name: 'home'}"
            class='block text-center nav-logo flex-shrink-0 relative self-start'>
            <b-button class='active w-full h-full nav-logo__button'>
                <div class='nav-logo__div absolute left-1/2 top-1/2 text-white'
                     style='transform: translateX(-50%) translateY(-55%)'>
                    {{ '<\/> DEV' }}
                </div>
            </b-button>
        </router-link>

        <div id='nav-list' class='hidden sm:flex flex-col sm:flex-row'>
            <b-button
                v-for='route in getPages()'
                :key='route.path'
                :class='[{ active: getCurrentPage() === route.path }]'
                class='inline-block col-2 rounded-full px-6 py-3 lg:mx-6 flex-nowrap mb-2 sm:mb-0'
                @click='changePage(route)'
            >
                {{ $t(route.trans) }}
            </b-button>

            <b-button
                class='inline-block rounded-full px-3'
                @click='selectLanguage(getNextLanguage())'
            >
                <img :src="'/img/svg/icons/'+getNextLanguage()+'_flag.svg'" class='mx-auto py-4'
                     width='25'>
            </b-button>
        </div>

        <!--        For mobile devices, the hide button -->
        <b-button
            id='nav-toggle'
            class='nav-toggle sm:hidden'
            @click.native.prevent='changeLinksState'
        >
            <ion-icon name='menu-sharp' size='large'></ion-icon
            >
        </b-button>
    </nav>
</template>

<script>
import BButton from '../b-Button'
import { getActiveLanguage } from 'laravel-vue-i18n'
import BCard from '../b-Card'

export default {
    components: { BCard, BButton },
    methods: {
        getPages() {
            return this.$router.options.routes
        },
        getCurrentPage() {
            return this.$route.fullPath
        },
        changePage(route) {
            let page = route.path
            if (this.getCurrentPage() !== page)
                this.$router.push(page)
        },
        changeLinksState() {
            $('#nav-list').toggleClass('hidden').toggleClass('flex')
        },
        getNextLanguage() {
            return this.getCurrentLanguage() === 'ru' ? 'en' : 'ru'
        },
        getCurrentLanguage() {
            return getActiveLanguage()
        },
        selectLanguage(lang) {
            let url = new URL(window.location.href)
            url.searchParams.set('lang', lang)
            window.location.href = url.toString()
        },
    },
}
</script>

<style lang='scss' scoped>
.nav-logo {
    width: 139px;
    height: 57px;
    white-space: nowrap;

    .nav-logo__button {
        border-radius: 0.7em;
    }

    .nav-logo__div {
        font-family: 'Space Mono', monospace;
        font-size: 1.5em;
        line-height: 1em;
        font-variant-ligatures: no-contextual;
    }
}

.nav-toggle {
    border-radius: 0.5em;
    padding: 0.7em;
    line-height: 0;
}
</style>
