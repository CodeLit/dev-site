<script setup>
import WhatsappIcon from 'vue-ionicons/dist/logo-whatsapp.vue'
import SkypeIcon from 'vue-ionicons/dist/logo-skype.vue'
import EmailIcon from 'vue-ionicons/dist/md-mail.vue'
import BLink from '@components/common/b-Link.vue'
</script>

<template>
    <b-link blank class="contact-link" url="https://telegram.im/@Lit32">
        <i class="fab fa-telegram-plane icon"></i>
        Telegram
    </b-link>
    <b-link blank class='contact-link' url='https://wa.me/77051127899'>
        <whatsapp-icon class="ionic-icon icon" />
        WhatsApp
    </b-link>
    <b-link blank class="contact-link" url="mailto:codelits@gmail.com">
        <email-icon class="ionic-icon icon" />
        Email
    </b-link>
    <b-link class="contact-link align-middle" url="skype:live:.cid.af3a8373b1f5ead2?chat">
        <skype-icon class="ionic-icon icon" />
        Skype
    </b-link>
</template>

<style lang="scss" scoped>
.contact-link {
    display: flex;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
}

.ionic-icon {
    fill: white;
    display: inline-block;
}

.icon {
    display: inline-block;
}
</style>
