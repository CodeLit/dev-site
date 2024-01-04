<template>
    <div>
        <b-parallax class="min-h-screen flex flex-col justify-center" img_url="/img/sky/kristopher-roller.webp">
            <b-card :blur_amount="20" class="flex flex-col md:flex-row max-w-screen-xl m-7 sm:mx-32 xl:mx-auto">
                <b-card class="p-5" style="box-shadow: 1px 1px white inset">
                    <div class="flex flex-col flex-center">
                        <b-round-box
                            alt="User's avatar"
                            class="mx-auto md:w-60 w-40"
                            style="border-radius: 7%"
                            url="/img/profile-3.webp"
                        />
                        <div class="flex flex-col text-center">
                            <p class="name text-white text-2xl mt-3">
                                {{ $t('common' + $store.getters.getTransSuffix + '.name') }}</p>
                            <p class="job text-gray-200 text-lg">
                                {{ $t('common' + $store.getters.getTransSuffix + '.developer') }}</p>
                        </div>
                    </div>
                </b-card>
                <div class="p-8 mx-auto md:text-xl text-sm flex place-items-center">
                    <div>
                        <h2 class="mb-4 text-center">{{ $t('common.welcome_to_blog') }}!</h2>
                        <p class="mb-4">{{ $t('common.home_description') }}.</p>
                        <div class="flex justify-center gap-5">
                            <b-button class="px-6 py-3 rounded-full"
                                      onclick="window.open('https://docs.google.com/document/d/1GXXEQ_ost2oaqeDfVITj3eSrrcgj7oUybV-n8CrUKUA/edit?usp=sharing', '_blank').focus()">
                                {{ $t('common.read_resume') }}
                            </b-button>
                            <b-button class="px-6 py-3 rounded-full"
                                      onclick="$('#contacts')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                                {{ $t('common.view_contacts') }}
                            </b-button>
                            <!--                        <b-button class="px-6 py-3 rounded-full"-->
                            <!--                                  @click.native="setPage('learn')">Хочу учиться!</b-button>-->

                        </div>
                    </div>
                </div>
            </b-card>
        </b-parallax>
        <b-card id="who-am-i" class="py-9 sm:py-16">
            <div class="container">
                <div class="text-sm md:text-base">
                    <h2 class="pb-1">{{ $t('common.what_i_do') }}?</h2>
                    <h5 class="my-4">
                        {{ $t('common.my_stack') }}:
                        <b-text-icon classes="fab fa-php">PHP,</b-text-icon>
                        <!--                        <b-text-icon classes="fab fa-golang">GoLang</b-text-icon>-->
                        <!--                        ,-->
                        <i class="fab fa-html5"></i> HTML5, <i class="fab fa-js"></i> JS, <i class="fab fa-css3"></i>
                        CSS,
                        <b-text-icon classes="fab fa-python">Python,</b-text-icon>
                        <b-text-icon classes="fab fa-golang">GO.</b-text-icon>
                    </h5>
                    <ul>
                        <li>{{ $t('info.various_languages') }} (<i
                            class="fab fa-npm"></i> npm, composer, pip, {{ $t('info.and_others') }}),
                            {{ $t('info.and_also_own_libs') }}.
                        </li>
                        <li>{{ $t('info.auto_deploy_with') }} <i class="fab fa-git-alt"></i> Git
                            {{ $t('info.hooks_or_using') }} SSH, {{ $t('info.as_manually_through') }} git push
                            production. {{ $t('info.resolve_branch_conflicts') }}.
                        </li>
                        <li v-html="$t('info.work_with_integrations')"></li>
                        <li v-html="$t('info.deploying_own_project')"></li>
                        <li v-html="$t('info.deploying_with_docker')"></li>
                        <li v-html="$t('info.my_own_projects')"></li>
                        <li v-html="$t('info.servers_on_linux')"></li>
                        <li v-html="$t('info.jinja_blade')"></li>
                        <li v-html="$t('info.auto_docs')"></li>
                        <li v-html="$t('info.read_external_code')"></li>
                        <li v-html="$t('info.teach_other_people')"></li>
                    </ul>
                    <br><br><br>
                    <h2 class="pb-1">{{ $t('common.what_i_know') }}?</h2>
                    <h5 class="my-4">
                        {{ $t('common.frameworks') }}:
                        <i class="fab fa-laravel"></i> Laravel, <i class="fab fa-vuejs"></i> Vue, Django, Yii, Flask.
                        <!--                        <i class="fab fa-modx"></i> ModX.-->
                    </h5>
                    <ul v-html="$t('info.second_block')"></ul>
                </div>
                <b-button class="px-6 py-3 rounded-full mt-5"
                          onclick="$('#contacts')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                    {{ $t('common.contact_with_me') }}
                </b-button>
            </div>
        </b-card>
        <b-parallax class="min-h-screen text-center py-72" img_url="/img/humans/macbook-and-books.webp">
            <documents />
        </b-parallax>

        <b-footer />
    </div>
</template>
<script>
import BParallax from '../b-Parallax'
import BCard from '../common/b-Card.vue'
import BButton from '../common/b-Button.vue'
import BDocument from '../b-Document'
import BFooter from '../layouts/b-Footer'
import Documents from '../layouts/b-DocumentsLayout'
import BTextIcon from '../b-TextIcon'

export default {
    components: { Documents, BFooter, BDocument, BButton, BCard, BParallax, BTextIcon },
    mounted() {
        this.$store.commit('unsetPageImage')
    },
}
</script>
