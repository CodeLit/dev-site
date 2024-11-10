<script setup>
import { onMounted } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import bDocuments from '@js/layouts/b-DocumentsLayout.vue'
import bFooter from '@js/layouts/b-Footer.vue'
import backgroundImg from '@img/backgrounds/business-people.jpg'
import { getCurrentRoute } from '@/app/routes.js'
import { Head } from '@inertiajs/vue3'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const store = useDevSiteStore()

onMounted(() => {
    store.setPageImage(backgroundImg)
})
</script>

<template>
    <div>
        <Head :title="t(getCurrentRoute().trans)" />
        <b-documents class="docs w-screen mt-12 md:mt-0" />
        <b-footer blurred="1" class="mt-20" />
    </div>
</template>

<style scoped>
.docs {
    text-align: center;
}

@media screen and (min-width: 770px) {
    .docs {
        width: 96vw;
        margin: 0 auto;
    }
}
</style>
