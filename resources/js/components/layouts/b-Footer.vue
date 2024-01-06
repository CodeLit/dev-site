<template>
    <footer :style="{'backdrop-filter':(blurred?'blur(12px)':'none')}" class="footer px-5 py-7 flex justify-around">
        <div id="contacts">
            <h3>{{ $t('common.contact_with_me') }}</h3>
            <br>
            <div class="flex">
                <!--                <b-link url="tel:+77051234567" class="contact-link">-->
                <!--                    <ion-icon name="call"></ion-icon>-->
                <!--                    Позвонить-->
                <!--                </b-link>-->

                <b-link blank class="contact-link" url="https://telegram.im/@Lit32">
                    <i class="fab fa-telegram-plane"></i>
                    Telegram
                </b-link>
                <b-link blank class='contact-link' url='https://wa.me/77051127899'>
                    <whatsapp-icon class="ionic-icon" />
                    WhatsApp
                </b-link>
                <b-link class="contact-link align-middle" url="skype:live:.cid.af3a8373b1f5ead2?chat">
                    <skype-icon class="ionic-icon" />
                    Skype
                </b-link>
            </div>
        </div>
        <div>
            <h3>{{ $t('common.links') }}</h3>
            <br>
            <b-link blank class="contact-link" url="https://github.com/CodeLit">
                <git-hub-icon class="ionic-icon" />
                GitHub
            </b-link>
            <b-link blank class="contact-link" url="https://www.linkedin.com/in/codelit/">
                <linkedin-icon class="ionic-icon" />
                LinkedIn
            </b-link>
        </div>
    </footer>
</template>

<script>
import BLink from '../common/b-Link.vue'
import WhatsappIcon from 'vue-ionicons/dist/logo-whatsapp.vue'
import SkypeIcon from 'vue-ionicons/dist/logo-skype.vue'
import GitHubIcon from 'vue-ionicons/dist/logo-github.vue'
import LinkedinIcon from 'vue-ionicons/dist/logo-linkedin.vue'

export default {
    components: { BLink, WhatsappIcon, SkypeIcon, GitHubIcon, LinkedinIcon },
    props: ['blurred'],
}
</script>

<style scoped>
.contact-link {
    margin: 0 10px;
}

.ionic-icon {
    fill: white;
    display: inline-block;
}
</style>
