<template>
    <div style="height: 27rem">
        <UseElementVisibility v-slot="{isVisible}">
            <iframe :style="{'pointer-events':shouldDisableScrolling?'none':'all'}"
                    v-if="isVisible" v-lazy="src" loading="lazy" class="w-full h-full"></iframe>
        </UseElementVisibility>
    </div>
</template>

<script setup>
import { UseElementVisibility } from '@vueuse/components'
</script>

<script>
import {VueScreenSizeMixin} from "vue-screen-size";

export default {
    props: ['src'],
    mixins: [VueScreenSizeMixin],
    computed:{
        shouldDisableScrolling(){
            return this.$vssWidth < 800
        }
    }
}
</script>
