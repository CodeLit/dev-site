<template>
    <div>
        <div class="card-container mx-auto">
            <b-project link="https://rosretail.com" job-type="teamwork" description-trans="rosretail" />
            <b-project link="https://arendator.moscow" job-type="teamwork" description-trans="arendator"/>
            <b-project job-type="solo_work" description-trans="telegram-bots" disable_preview="true" />
            <b-project link="https://sofilena.ru" job-type="teamwork" description-trans="sofilena"/>
            <b-project link="http://bonussofilena.ru" get_external_html="true" disable_preview="true"
                       job-type="solo_work" description-trans="bonussofilena"/>
            <b-project link="https://whitewill.london" job-type="teamwork" />
            <b-project link="https://marinadubai.ae" job-type="teamwork" />
            <b-project link="https://kupitekvartiru.com" job-type="teamwork" />
            <b-project link="https://moscowcitysale.ru" job-type="teamwork" />
            <b-project link="https://kupiteloft.ru" job-type="teamwork" />
            <b-project link="https://hamovnyki.ru" job-type="teamwork" />
            <b-project link="https://silverbor.moscow" job-type="teamwork" />
            <b-project link="https://barvikha.moscow" job-type="teamwork" />
            <b-project link="https://osobnyaki.com" job-type="teamwork" />
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
        this.$store.commit('setPageImage', '/images/backgrounds/laptop-on-table.jpg')
    }
}
</script>
<style scoped>
.card-container {
    width: 90vw;
}
</style>
