<template>
    <b-button
        class='inline-block rounded-full px-3'
        @click='selectLanguage(getNextLanguage())'
    >
        <img :src="'/img/svg/icons/'+getNextLanguage()+'_flag.svg'" class='mx-auto py-4'
             width='25'>
    </b-button>
</template>

<script>
import { getActiveLanguage } from 'laravel-vue-i18n'

export default {
    methods: {
        selectLanguage(lang) {
            let url = new URL(window.location.href)
            url.searchParams.set('lang', lang)
            window.location.href = url.toString()
        },
        getNextLanguage() {
            return this.getCurrentLanguage() === 'ru' ? 'en' : 'ru'
        },
        getCurrentLanguage() {
            return getActiveLanguage()
        },
    },
}
</script>
