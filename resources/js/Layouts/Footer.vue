<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BContacts from '@sections/b-Contacts.vue'
import BLinks from '@layouts/b-Links.vue'

const props = defineProps(['blurred'])
const { t } = useI18n()
const backdropFilter = computed(() => props.blurred ? 'blur(12px)' : 'none')
</script>

<template>
    <footer :style="{ 'backdrop-filter': backdropFilter }"
            class="footer flex flex-col sm:flex-row px-10 py-7 justify-center
            items-center md:justify-around">
        <div class="footer-inner w-3/4 sm:w-full flex justify-center items-center">
            <div id="contacts" class="flex flex-col w-1/2 justify-center items-center">
                <h3 class="info-title">{{ t('common.contact_with_me') }}</h3>
                <div class="flex flex-wrap justify-center">
                    <!--                <b-link url="tel:+77051234567" class="contact-link">-->
                    <!--                    <ion-icon name="call"></ion-icon>-->
                    <!--                    Позвонить-->
                    <!--                </b-link>-->
                    <b-contacts />
                </div>
            </div>
            <div class="links-wrapper flex flex-col w-1/2 justify-center items-center">
                <h3 class="info-title">{{ t('common.links') }}</h3>
                <div class="flex flex-wrap justify-center">
                    <b-links />
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
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
</style>
