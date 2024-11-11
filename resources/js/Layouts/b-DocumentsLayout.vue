<template>
    <div>
        <b-card class="py-5 px-2">
            <h1>{{ $t('common.my_certificates') }}</h1>
            <br>
            <b-folder src="https://drive.google.com/embeddedfolderview?id=1KEFEzw8osBS9PH9C4Y1GsQaP6UixzdH0#grid" />
        </b-card>
        <b-card class="mt-72 py-5 px-2">
            <h2>{{ $t('common.other_documents') }}</h2>
            <br>
            <b-folder src="https://drive.google.com/embeddedfolderview?id=1Me2NyyTAaUd9QrfNDBqCp--o-o0HOmn0#grid" />
        </b-card>
    </div>

</template>

<script>
import BCard from '@components/common/b-Card.vue'
import bFolder from './b-GoogleDocsFolder.vue'

export default {
    name: 'bDocuments',
    components: { BCard, bFolder },
}
</script>

<style scoped>

</style>
