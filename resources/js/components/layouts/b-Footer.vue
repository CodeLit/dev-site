<template>
    <footer :style="{'backdrop-filter':(blurred?'blur(12px)':'none')}"
            class="footer flex flex-col sm:flex-row px-10 py-7 justify-center
            items-center md:justify-around">
        <div class="footer-inner w-3/4 sm:w-full flex justify-center items-center">
            <div id="contacts" class="flex flex-col w-1/2 justify-center items-center">
                <h3 class="info-title">{{ $t('common.contact_with_me') }}</h3>
                <div class="flex flex-wrap justify-center">
                    <!--                <b-link url="tel:+77051234567" class="contact-link">-->
                    <!--                    <ion-icon name="call"></ion-icon>-->
                    <!--                    Позвонить-->
                    <!--                </b-link>-->

                    <b-link blank class="contact-link" url="https://telegram.im/@Lit32">
                        <i class="fab fa-telegram-plane icon"></i>
                        Telegram
                    </b-link>
                    <b-link blank class='contact-link' url='https://wa.me/77051127899'>
                        <whatsapp-icon class="ionic-icon icon" />
                        WhatsApp
                    </b-link>
                    <b-link class="contact-link align-middle" url="skype:live:.cid.af3a8373b1f5ead2?chat">
                        <skype-icon class="ionic-icon icon" />
                        Skype
                    </b-link>
                </div>
            </div>
            <div class="links-wrapper flex flex-col w-1/2 justify-center items-center">
                <h3 class="info-title">{{ $t('common.links') }}</h3>
                <div class="flex flex-wrap justify-center">
                    <b-link blank class="contact-link" url="https://github.com/CodeLit">
                        <git-hub-icon class="ionic-icon icon" />
                        GitHub
                    </b-link>
                    <b-link blank class="contact-link" url="https://www.linkedin.com/in/codelit/">
                        <linkedin-icon class="ionic-icon icon" />
                        LinkedIn
                    </b-link>
                </div>

            </div>
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

.info-title {
    margin-bottom: 10px;
}

.links-wrapper {
    margin-top: 20px;
}

@media (min-width: 640px) {
    .links-wrapper {
        margin-top: 0;
    }
}

.icon {
    display: inline-block;
}
</style>
