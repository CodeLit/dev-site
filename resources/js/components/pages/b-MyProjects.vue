<template>
    <div>
        <div class="card-container mx-auto">
            <b-project link="https://rosretail.com" job-type="командная"
            description="Московский сайт для продажи ритейл-бизнеса.
            Слайдер в начале страницы и его бек-енд создавался мной.
            Фильтры создавали всей командой. В основном работал над фильтрами."/>
            <b-project link="https://arendator.moscow" job-type="командная"  />
            <b-project link="https://sofilena.ru" job-type="командная"  />
            <b-project link="http://bonussofilena.ru" job-type="одиночная"  />
        </div>
        <b-footer />
    </div>
</template>
<script>

import bProject from "../layouts/b-Project"
import bFooter from "../layouts/b-Footer"
export default {
    components: {bProject,bFooter}
}
</script>
<style scoped>
.card-container{
    width: 90vw;
}
</style>
