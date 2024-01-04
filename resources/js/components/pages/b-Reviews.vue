<template>
    <div>
        <div class="container">
            <b-card>
                <h1 class="text-center">Собеседования</h1>
                Это самая важная часть любого найма. На этом этапе работник и кампания выясняют, подходят ли они друг
                другу, соблюдены ли интересы обеих сторон.

                <!-- Рассказать про важность перезванивания на собеседованиях -->
            </b-card>
            <b-card class="px-7 py-4">
                <h2>Вопросы и тестовые задания</h2>

                Здесь можно посмотреть, как я отвечал на те или иные вопросы на собеседованиях.
                <b-questions />
            </b-card>
        </div>
    </div>
</template>

<style></style>
<script>
import BCard from '../common/b-Card.vue'
import BHeader from '../layouts/b-Header'

export default {
    components: { BHeader, BCard },
}
</script>
