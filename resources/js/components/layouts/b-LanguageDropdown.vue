<template>
    <div class="languages-wrapper">
        <b-button
            class='inline-block rounded-full px-3' @click=""
        >
            <img :alt="getCurrentLanguage()" :src="'/img/svg/flags/'+getCurrentLanguage()+'_flag.svg'"
                 class='mx-auto py-4' width='25'>
        </b-button>
        <div class="dropdown">
            <b-button v-for="language in languages" :key="language"
                      :class="{hidden:getCurrentLanguage() === language}" class='inline-block rounded-full px-3'
                      @click='selectLanguage(language)'
            >
                <img :alt="language" :src="'/img/svg/flags/'+language+'_flag.svg'"
                     class='mx-auto py-4' width='25'>
            </b-button>
        </div>
    </div>
</template>

<script>
import { getActiveLanguage } from 'laravel-vue-i18n'


export default {
    data() {
        return {
            languages: ['en', 'ge', 'ru', 'fr'],
        }
    },
    methods: {
        selectLanguage(lang) {
            let url = new URL(window.location.href)
            url.searchParams.set('lang', lang)
            window.location.href = url.toString()
        },
        getCurrentLanguage() {
            return getActiveLanguage()
        },
    },
}
</script>

<style lang="scss" scoped>
.languages-wrapper {
    position: relative;
    z-index: 999;

    .dropdown {
        display: flex;
        flex-direction: column;

        visibility: hidden;
        position: absolute;
        top: 90%;
        left: 0;
    }

    &:hover {
        .dropdown {
            visibility: visible;
        }
    }
}
</style>
