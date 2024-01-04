<template>
    <div>
        <div class="card-container mx-auto flex justify-end mb-4">
            <div>
                <v-switch v-model="iframeMode" class="text-white" color="success" inset label="iFrame mode"></v-switch>
            </div>
        </div>
        <div class="card-container mx-auto">
            <b-project :mode="getMode()" job-type="teamwork" link="whitewill.london" title="WhiteWill" />
            <b-project :mode="getMode()" job-type="teamwork" link="marinadubai.ae" title="Marina Dubai" />
            <b-project :mode="getMode()" description-trans="rosretail" job-type="teamwork" link="rosretail.com"
                       title="RosRetail" />
            <b-project :mode="getMode()" description-trans="arendator" job-type="teamwork"
                       link="arendator.moscow" title="Arendator Moscow" />
            <b-project :mode="getMode()" job-type="teamwork" link="moscowcitysale.ru" title="MoscowCitySale" />
            <b-project :mode="getMode()" job-type="teamwork" link="kupitekvartiru.com" title="KupiteKvartiru" />
            <b-project :mode="getMode()" job-type="teamwork" link="hamovnyki.ru" title="Hamovnyki" />
            <b-project :mode="getMode()" job-type="teamwork" link="kupiteloft.ru" title="KupiteLoft" />
            <b-project :mode="getMode()" job-type="teamwork" link="barvikha.moscow" title="Barvikha" />
            <b-project :mode="getMode()" description-trans="sofilena" job-type="teamwork" link="sofilena.ru"
                       title="SofiLena" />
            <!--            <b-project title="BonusSofilena" get_external_html="true" disable_preview="true"-->
            <!--                       job-type="solo_work" description-trans="bonussofilena"/>-->
            <b-project :mode="getMode()" job-type="teamwork" link="osobnyaki.com" title="Osobnyaki" />
            <b-project :mode="getMode()" job-type="teamwork" link="silverbor.moscow" title="Silver Bor" />
            <b-project :mode="getMode()" class="pb-0" description-trans="telegram-bots"
                       disable_preview="true" job-type="solo_work" logo="/img/svg/logos/telegram.svg"
                       title="Telegram Bots" />

        </div>
        <b-footer blurred="1" />
    </div>
</template>
<script>


import bProject from '../layouts/b-Project'
import bFooter from '../layouts/b-Footer'
import BButton from '../common/b-Button.vue'
import BIcon from '../common/b-Icon.vue'


export default {
    components: { BIcon, BButton, bProject, bFooter },
    mounted() {
        this.$store.commit('setPageImage', '/img/backgrounds/laptop-on-table.webp')
    },
    data() {
        return {
            iframeMode: false,
        }
    },
    methods: {
        getMode() {
            return this.iframeMode ? 'iframe' : 'image'
        },
    },
}
</script>
<style scoped>
.card-container {
    width: 90vw;
}
</style>
