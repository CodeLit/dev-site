<template>
    <b-card
        v-if='!cookiesAccepted'
        class='fixed flex place-items-center left-2 bottom-2 px-5 py-3  w-full lg:w-1/2 border-white border-l-2'
    >
        <b-round-box
            alt='Cookies image'
            class='mr-3'
            height='84'
            url='/img/cookies.webp'
            width='84'
        />
        <div>
            <h4>{{ $t('common.warning') }}.</h4>
            {{ $t('common.this_site_uses') }}
            <a
                :href='cookiesLink'
                target='__blank'
            >{{ $t('common.cookies') }}</a>. {{ $t('common.dont_like_cookies') }}.
            <b-button
                class='px-3 py-1 inline-block float-right mr-10 '
                @click.native='acceptCookies'
            >{{ $t('common.okay_fine') }}
            </b-button
            >
        </div>
    </b-card>
</template>

<script>
import { getActiveLanguage } from 'laravel-vue-i18n'
import Cookies from 'js-cookie'

export default {
    name: 'b-Cookies',
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
    },
    computed: {
        cookiesLink() {
            let lang = getActiveLanguage()
            switch (lang) {
                case 'ru':
                    return 'https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas'
                case 'en':
                    return 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer'
            }
        },
    },
    mounted() {
        this.cookiesAccepted = Cookies.get('cookiesAccepted')
    },
}
</script>

<style scoped>

</style>
