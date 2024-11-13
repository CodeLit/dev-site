<script setup>
import { onMounted } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import bDocuments from '@layouts/b-DocumentsLayout.vue'
import backgroundImg from '@img/backgrounds/business-people.jpg'
import PageTitle from '@sections/PageTitle.vue'

const store = useDevSiteStore()

onMounted(() => {
    store.setPageImage(backgroundImg)
})
</script>

<template>
    <div>
        <PageTitle />
        <bDocuments class="docs w-screen mt-12 md:mt-0" />
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
