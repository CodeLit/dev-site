<script setup>
import { onMounted, ref } from 'vue'
import BButton from '@components/common/b-Button.vue'
import { changeLanguage, importImg } from '@/App/helpers.js'
import { getActiveLanguage } from 'laravel-vue-i18n'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
const currentLanguage = ref(getActiveLanguage())
const selectLanguage = (lang) => {
    locale.value = lang
    changeLanguage(lang)
    currentLanguage.value = lang
}
const initLanguage = () => {
    const selectedLanguage = localStorage.getItem('website-locale')
    if (selectedLanguage) {
        selectLanguage(selectedLanguage)
    }
}

onMounted(() => {
    initLanguage()
})
</script>

<template>
    <div class="languages-wrapper">
        <b-button class="inline-block rounded-full px-3 h-full">
            <img :alt="currentLanguage" :src="importImg(`/svg/flags/${currentLanguage}_flag.svg`)"
                 class="mx-auto py-4"
                 height="25" width="25" />
        </b-button>

        <div class="dropdown">
            <b-button
                v-for="language in availableLocales.filter( lang => lang !== currentLanguage)"
                :key="language"
                class="inline-block rounded-full px-3 h-full"
                @click="selectLanguage(language)"
            >
                <img :alt="language" :src="importImg(`/svg/flags/${language}_flag.svg`)" class="mx-auto py-4"
                     height="25" width="25" />
            </b-button>
        </div>
    </div>
</template>

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

    &:hover .dropdown {
        visibility: visible;
    }
}
</style>
