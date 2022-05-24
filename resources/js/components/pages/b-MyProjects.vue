<template>
    <div>
        <div class="card-container mx-auto">
            <b-project link="https://rosretail.com" job-type="teamwork" description-trans="rosretail" />
            <b-project link="https://arendator.moscow" job-type="teamwork" description-trans="arendator"/>
            <b-project link="https://sofilena.ru" job-type="teamwork" description-trans="sofilena"/>
            <b-project link="http://bonussofilena.ru" get_external_html="true" disable_preview="true"
                       job-type="solo_work" description-trans="bonussofilena"/>
<!--        TODO: Добавить телеграм-ботов, и прочие маленькие проекты.-->
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
