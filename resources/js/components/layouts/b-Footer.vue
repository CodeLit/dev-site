<template>
    <footer class="px-5 py-7 flex justify-around" :style="{'backdrop-filter':(blurred?'blur(12px)':'none')}">
        <div id="contacts">
            <h3>{{ $t('common.contact_with_me') }}</h3>
            <br>
            <div class="flex">
<!--                <b-link url="tel:+79187467928" class="contact-link">-->
<!--                    <ion-icon name="call"></ion-icon>-->
<!--                    Позвонить-->
<!--                </b-link>-->

                <b-link url="https://telegram.im/@Lit32" blank class="contact-link">
                    <i class="fab fa-telegram-plane"></i>
                    Telegram
                </b-link>
                <b-link url="https://wa.me/79187467928" blank class="contact-link">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    WhatsApp
                </b-link>
                <b-link url="skype:live:.cid.af3a8373b1f5ead2?chat" class="contact-link align-middle">
                    <ion-icon name="logo-skype"></ion-icon>
                    Skype
                </b-link>
            </div>
        </div>
        <div>
            <h3>{{ $t('common.links') }}</h3>
            <br>
            <b-link url="https://github.com/CodeLit" blank class="contact-link">
                <ion-icon name="logo-github"></ion-icon>
                GitHub
            </b-link>
        </div>
    </footer>
</template>

<script>
import BLink from "../b-Link";
export default {
    components: {BLink},
    props: ['blurred']
}
</script>

<style scoped>
    .contact-link{
        margin: 0 10px;
    }
</style>
