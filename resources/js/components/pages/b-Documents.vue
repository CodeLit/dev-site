<template>
    <div>
        <b-documents class="docs w-screen mt-12 md:mt-0"/>
        <b-footer blurred="1" class="mt-20" />
    </div>
</template>

<script>
import bDocuments from "../layouts/b-Documents"
import bFooter from "../layouts/b-Footer"
export default {
    name: "b-Documents",
    components: {bDocuments,bFooter},
    mounted() {
        this.$store.commit('setPageImage','/images/backgrounds/business-people.jpg')
    },
    destroyed() {
        this.$store.commit('unsetPageImage')
    }
}
</script>
<style scoped>
.docs{
    text-align: center;
}
@media screen and (min-width: 770px){
    .docs{
        width: 96vw;
        margin: 0 auto;
    }
}
</style>
