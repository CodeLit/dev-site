<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDevSiteStore } from '@/App/store.js'
import skyImage from '@img/sky/kristopher-roller.jpg'
import bParallax from '../Components/b-Parallax.vue'
import bCard from '../Components/common/b-Card.vue'
import bButton from '../Components/common/b-Button.vue'
import bFooter from '@layouts/b-Footer.vue'
import documents from '@layouts/b-DocumentsLayout.vue'
import bTextIcon from '../Components/b-TextIcon.vue'
import laptopImage from '@img/humans/macbook-and-books.jpg'
import BContactsModal from '@sections/b-ContactsModal.vue'
import PageTitle from '@sections/PageTitle.vue'

const contactsOpened = ref(false)
const { t } = useI18n()
const devSiteStore = useDevSiteStore()

const openContacts = () => {
    contactsOpened.value = true
}

const openResume = () => {
    if (typeof window === 'undefined') return
    window.open('https://docs.google.com/document/d/1GXXEQ_ost2oaqeDfVITj3eSrrcgj7oUybV-n8CrUKUA', '_blank').focus()
}

onMounted(() => {
    devSiteStore.unsetPageImage()
})
</script>

<template>
    <div class="home-page">
        <PageTitle />
        <b-contacts-modal v-if="contactsOpened" @close="contactsOpened = false" />
        <b-parallax :img_url="skyImage" class="min-h-screen flex flex-col justify-center">
            <b-card :blur_amount="20" class="flex flex-col md:flex-row max-w-screen-xl m-7 sm:mx-32 xl:mx-auto">
                <div class="md:p-8 p-3 mx-auto md:text-xl text-sm flex place-items-center">
                    <div>
                        <h2 class="md:mb-4 text-center">{{ t('common.welcome_to_blog') }}!</h2>
                        <p class="md:mb-4 mb-1">{{ t('common.home_description') }}.</p>
                        <p class="job text-gray-200 text-lg text-center my-3">
                            {{ t('common' + devSiteStore.getTransSuffix + '.name') }}
                            - {{ t('common' + devSiteStore.getTransSuffix + '.developer') }}
                        </p>
                        <div class="flex justify-center gap-5">
                            <b-button class="md:px-6 md:py-3 p-2 rounded-full" @click="openResume">
                                {{ t('common.read_resume') }}
                            </b-button>
                            <b-button class="md:px-6 md:py-3 px-3 rounded-full" @click="openContacts">
                                {{ t('common.view_contacts') }}
                            </b-button>
                        </div>
                    </div>
                </div>
            </b-card>
        </b-parallax>
        <b-card id="who-am-i" class="py-9 sm:py-16">
            <div class="container">
                <div class="text-sm md:text-base">
                    <h2 class="pb-1">{{ t('common.what_i_do') }}?</h2>
                    <p class="my-4 text-2xl">
                        {{ t('common.my_stack') }}:
                        <b-text-icon classes="fab fa-php">PHP,&nbsp;</b-text-icon>
                        <i class="fab fa-html5"></i> HTML5, <i class="fab fa-js"></i> JS, <i class="fab fa-css3"></i>
                        CSS,
                        <b-text-icon classes="fab fa-python">Python,&nbsp;</b-text-icon>
                        <b-text-icon classes="fab fa-golang">GoLang.</b-text-icon>
                    </p>
                    <ul>
                        <li>{{ t('info.various_languages') }} (<i class="fab fa-npm"></i> npm, composer, pip,
                            {{ t('info.and_others') }}),
                            {{ t('info.and_also_own_libs') }}.
                        </li>
                        <li>{{ t('info.auto_deploy_with') }} <i class="fab fa-git-alt"></i> Git
                            {{ t('info.hooks_or_using') }} SSH, {{ t('info.as_manually_through') }} git push production.
                            {{ t('info.resolve_branch_conflicts') }}.
                        </li>
                        <li v-html="t('info.work_with_integrations')"></li>
                        <li v-html="t('info.deploying_own_project')"></li>
                        <li v-html="t('info.deploying_with_docker')"></li>
                        <li v-html="t('info.my_own_projects')"></li>
                        <li v-html="t('info.servers_on_linux')"></li>
                        <li v-html="t('info.jinja_blade')"></li>
                        <li v-html="t('info.auto_docs')"></li>
                        <li v-html="t('info.read_external_code')"></li>
                        <li v-html="t('info.teach_other_people')"></li>
                    </ul>
                    <br><br><br>
                    <h2 class="pb-1">{{ t('common.what_i_know') }}?</h2>
                    <p class="my-4 text-2xl">
                        {{ t('common.frameworks') }}:
                        <i class="fab fa-laravel"></i> Laravel, <i class="fab fa-vuejs"></i> Vue, Django, Yii, Flask.
                    </p>
                    <ul v-html="t('info.second_block')"></ul>
                </div>
                <b-button class="px-6 py-3 rounded-full mt-5" @click="openContacts">
                    {{ t('common.contact_with_me') }}
                </b-button>
            </div>
        </b-card>
        <b-parallax :img_url="laptopImage" class="min-h-screen text-center py-72">
            <documents />
        </b-parallax>
        <b-footer />
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-height: 500px) {
    .user-photo {
        width: 27%;
    }
}

@media screen and (max-height: 900px) {
    .user-photo {
        width: 40%;
    }
}
</style>
