<template>
    <div>
        <div class="card-container mx-auto">
            <b-project link="https://rosretail.com" job-type="командная"
                       description="Московский сайт для продажи ритейл-бизнеса.
            Слайдер в начале страницы и его бек-енд создавался мной.
            Фильтры создавали всей командой. Также полностью сделал динамический поиск в фильтре. В основном работал над фильтрами и подборками недвижимости."/>
            <b-project link="https://arendator.moscow" job-type="командная" description="Московский сайт для аренды квартир.
            Здесь все фильтры динамические."/>
            <b-project link="https://sofilena.ru" job-type="командная"
                       description="Магазин женской одежды. Одна из моих первых работ, написанная в связке с Битрикс. Сайт полностью подключён к 1С, и активно дорабатывался."/>
            <b-project link="http://bonussofilena.ru" get_external_html="true" disable_preview="true" job-type="одиночная"
                       description="Отдельная система для работы с бонусными картами в магазинах SofiLena. Ведётся активная база данных по операциям с клиентами. Весь сайт полностью написан мной, подключён с помощью API к 1С торговле."/>
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
