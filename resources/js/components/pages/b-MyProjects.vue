<template>
    <div>
        <div class="card-container mx-auto">
            <b-button class="ml-auto" @click="switchMode">Image/iFrame</b-button>
        </div>

        <div class="card-container mx-auto">
            <b-project :mode="mode" job-type="teamwork" link="whitewill.london" title="WhiteWill" />
            <b-project :mode="mode" job-type="teamwork" link="marinadubai.ae" title="Marina Dubai" />
            <b-project :mode="mode" description-trans="rosretail" job-type="teamwork" link="rosretail.com"
                       title="RosRetail" />
            <b-project :mode="mode" description-trans="arendator" job-type="teamwork"
                       link="arendator.moscow" title="Arendator Moscow" />
            <b-project :mode="mode" job-type="teamwork" link="moscowcitysale.ru" title="MoscowCitySale" />
            <b-project :mode="mode" job-type="teamwork" link="kupitekvartiru.com" title="KupiteKvartiru" />
            <b-project :mode="mode" job-type="teamwork" link="hamovnyki.ru" title="Hamovnyki" />
            <b-project :mode="mode" job-type="teamwork" link="kupiteloft.ru" title="KupiteLoft" />
            <b-project :mode="mode" job-type="teamwork" link="barvikha.moscow" title="Barvikha" />
            <b-project :mode="mode" description-trans="sofilena" job-type="teamwork" link="sofilena.ru"
                       title="SofiLena" />
            <!--            <b-project title="BonusSofilena" get_external_html="true" disable_preview="true"-->
            <!--                       job-type="solo_work" description-trans="bonussofilena"/>-->
            <b-project :mode="mode" job-type="teamwork" link="osobnyaki.com" title="Osobnyaki" />
            <b-project :mode="mode" job-type="teamwork" link="silverbor.moscow" title="Silver Bor" />
            <b-project :mode="mode" class="pb-0" description-trans="telegram-bots"
                       disable_preview="true" job-type="solo_work" logo="/img/svg/logos/telegram.svg" title="Telegram Bots" />

        </div>
        <b-footer blurred="1" />
    </div>
</template>
<script>


import bProject from '../layouts/b-Project'
import bFooter from '../layouts/b-Footer'
import BButton from '../common/b-Button.vue'

export default {
    components: { BButton, bProject, bFooter },
    mounted() {
        this.$store.commit('setPageImage', '/img/backgrounds/laptop-on-table.webp')
    },
    data() {
        return {
            mode: 'image',
        }
    },
    methods: {
        switchMode() {
            this.mode = this.mode === 'image' ? 'iframe' : 'image'
        },
    },
}
</script>
<style scoped>
.card-container {
    width: 90vw;
}
</style>
