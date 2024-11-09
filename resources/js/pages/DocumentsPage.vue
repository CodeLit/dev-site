<script setup>
import bDocuments from '@js/layouts/b-DocumentsLayout.vue'
import bFooter from '@js/layouts/b-Footer.vue'
</script>

<template>
    <div>
        <b-documents class="docs w-screen mt-12 md:mt-0" />
        <b-footer blurred="1" class="mt-20" />
    </div>
</template>

<script>
import backgroundImg from '@img/backgrounds/business-people.jpg'

export default {
    name: 'b-Documents',
    mounted() {
        this.$store.commit('setPageImage', backgroundImg)
    },
}
</script>
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
