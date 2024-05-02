<template>
    <div class="languages-wrapper">
        <b-button
            class='inline-block rounded-full px-3 h-full' @click=""
        >
            <img :alt="getCurrentLanguage()"
                 :src="importImg('/svg/flags/'+ this.getCurrentLanguage() + '_flag.svg')"
                 class='mx-auto py-4' height="25" width='25'>
        </b-button>

        <div class="dropdown">
            <b-button v-for="language in languages" :key="language"
                      :class="{hidden:getCurrentLanguage() === language}" class='inline-block rounded-full px-3 h-full'
                      @click='selectLanguage(language)'
            >
                <img :alt="language" :src="importImg('/svg/flags/'+ language + '_flag.svg')"
                     class='mx-auto py-4' height="25" width='25'>
            </b-button>
        </div>
    </div>
</template>

<script>

import BButton from '@components/common/b-Button.vue'
import { getActiveLanguage } from 'laravel-vue-i18n'

export default {
    components: { BButton },
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
    display: flex;
    justify-content: center;
    align-items: center;

    .dropdown {
        display: flex;
        flex-direction: column;

        visibility: hidden;
        position: absolute;
        top: 100%;
        left: 0;
    }

    &:hover {
        .dropdown {
            visibility: visible;
        }
    }
}
</style>
