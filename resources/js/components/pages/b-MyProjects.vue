<template>
    <div>
        <div class="card-container mx-auto">
            <b-project title="WhiteWill" link="https://whitewill.london" job-type="teamwork" />
            <b-project title="Marina Dubai" link="https://marinadubai.ae" job-type="teamwork" />
            <b-project title="RosRetail" link="https://rosretail.com" job-type="teamwork" description-trans="rosretail" />
            <b-project title="Arendator Moscow" link="https://arendator.moscow" job-type="teamwork"
                       description-trans="arendator"/>
            <b-project title="Telegram Bots" job-type="solo_work" description-trans="telegram-bots" disable_preview="true" />
            <b-project title="MoscowCitySale" link="https://moscowcitysale.ru" job-type="teamwork" />
            <b-project title="KupiteKvartiru" link="https://kupitekvartiru.com" job-type="teamwork" />
            <b-project title="Hamovnyki" link="https://hamovnyki.ru" job-type="teamwork" />
            <b-project title="KupiteLoft" link="https://kupiteloft.ru" job-type="teamwork" />
            <b-project title="Barvikha" link="https://barvikha.moscow" job-type="teamwork" />
            <b-project title="SofiLena" link="https://sofilena.ru" job-type="teamwork" description-trans="sofilena"/>
            <b-project title="BonusSofilena" link="http://bonussofilena.ru" get_external_html="true" disable_preview="true"
                       job-type="solo_work" description-trans="bonussofilena"/>
            <b-project title="Osobnyaki" link="https://osobnyaki.com" job-type="teamwork" />
            <b-project title="Silver Bor" link="https://silverbor.moscow" job-type="teamwork" />
        </div>
        <b-footer blurred="1"/>
    </div>
</template>
<script>

import bProject from "../layouts/b-Project"
import bFooter from "../layouts/b-Footer"

export default {
    components: {bProject, bFooter},
    mounted() {
        this.$store.commit('setPageImage', '/img/backgrounds/laptop-on-table.webp')
    }
}
</script>
<style scoped>
.card-container {
    width: 90vw;
}
</style>
