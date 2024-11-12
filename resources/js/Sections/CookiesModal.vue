<script setup>
import { computed, onMounted, ref } from 'vue'
import { getActiveLanguage } from 'laravel-vue-i18n'
import Cookies from 'js-cookie'

import bRoundBox from '@components/b-RoundBox.vue'
import bButton from '@components/common/b-Button.vue'
import cookiesImg from '@img/cookies.png'
import bCard from '@components/common/b-Card.vue'

const cookiesAccepted = ref(false)

const acceptCookies = () => {
    Cookies.set('cookiesAccepted', true, { expires: 3 })
    cookiesAccepted.value = true
}

const cookiesLink = computed(() => {
    const lang = getActiveLanguage()
    return lang === 'ru'
        ? 'https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas'
        : 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer'
})

onMounted(() => {
    cookiesAccepted.value = Cookies.get('cookiesAccepted')
})
</script>

<template>
    <BCard
        v-if="!cookiesAccepted"
        class="cookies fixed flex place-items-center left-2 bottom-2 px-5 py-3 w-full lg:w-1/2 border-white border-l-2"
    >
        <BRoundBox
            :url="cookiesImg"
            alt="Cookies image"
            class="mr-3"
            height="84"
            width="84"
        />
        <div>
            <h4>{{ $t('common.warning') }}.</h4>
            {{ $t('common.this_site_uses') }}
            <a
                :href="cookiesLink"
                target="__blank"
            >{{ $t('common.cookies') }}</a>. {{ $t('common.dont_like_cookies') }}.
            <b-button
                class="px-3 py-1 inline-block float-right mr-10"
                @click="acceptCookies"
            >{{ $t('common.okay_fine') }}
            </b-button>
        </div>
    </BCard>
</template>

<style scoped>
.cookies {
    z-index: 200;
}
</style>
