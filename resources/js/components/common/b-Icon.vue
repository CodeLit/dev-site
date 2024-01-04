<template>
    <svg-icon :path="path||defaultPath" type="mdi"></svg-icon>
</template>

<script>
// ICONS: https://pictogrammers.com/library/mdi/
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAbTesting } from '@mdi/js'

export default {
    components: {
        SvgIcon,
    },
    props: ['path'],
    data() {
        return {
            defaultPath: mdiAbTesting,
        }
    },
}
</script>

<style scoped>


</style>
