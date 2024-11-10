<script setup>
import { onMounted } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import bDocuments from '@js/layouts/b-DocumentsLayout.vue'
import bFooter from '@js/layouts/b-Footer.vue'
import backgroundImg from '@img/backgrounds/business-people.jpg'
import { useI18n } from 'vue-i18n'
import PageTitle from '@sections/PageTitle.vue'

const { t } = useI18n()

const store = useDevSiteStore()

onMounted(() => {
    store.setPageImage(backgroundImg)
})
</script>

<template>
    <div>
        <PageTitle />
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
