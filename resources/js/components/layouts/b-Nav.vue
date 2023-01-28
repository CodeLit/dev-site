<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <router-link
            :to="{name: 'home'}"
            class="block text-center nav-logo flex-shrink-0 text-4xl rounded-full w-24 h-24 relative self-start">
            <b-button class="active w-full h-full rounded-full">
                <div class="absolute left-1/2 top-1/2 text-white"
                    style="transform: translateX(-50%) translateY(-55%)">
                    Dev
                </div>
            </b-button>
        </router-link>

        <div id="nav-list" class="hidden sm:flex flex-col sm:flex-row">
            <b-button
                :key="route.path"
                v-for="route in getPages()"
                @click="changePage(route)"
                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6 flex-nowrap mb-2 sm:mb-0"
                :class="[{ active: getCurrentPage() === route.path }]"
            >
                {{ $t(route.trans) }}
            </b-button>

            <b-button
                @click="selectLanguage(getNextLanguage())"
                class="inline-block rounded-full px-3"
            >
                <img :src="'/img/icons/'+getNextLanguage()+'_flag.svg'" width="25"
                 class="mx-auto py-4">
            </b-button>
        </div>

<!--        Для мобильных устройств, кнопка скрытия -->
        <b-button
            id="nav-toggle"
            @click.native.prevent="changeLinksState"
            class="sm:hidden p-4"
            ><ion-icon name="menu-sharp" size="large"></ion-icon
        ></b-button>
    </nav>
</template>

<script>
import BButton from "../b-Button";
import {getActiveLanguage} from "laravel-vue-i18n";
import BCard from "../b-Card";

export default {
    components: {BCard, BButton},
    methods: {
        getPages(){
            return this.$router.options.routes
        },
        getCurrentPage() {
            return this.$route.fullPath
        },
        changePage(route){
            let page = route.path
            if (this.getCurrentPage() !== page)
                this.$router.push(page)
        },
        changeLinksState() {
            $('#nav-list').toggleClass('hidden').toggleClass('flex')
        },
        getNextLanguage(){
            return this.getCurrentLanguage() === 'ru' ? 'en' : 'ru'
        },
        getCurrentLanguage(){
            return getActiveLanguage()
        },
        selectLanguage(lang){
            let url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            window.location.href = url.toString()
        }
    },
}
</script>
