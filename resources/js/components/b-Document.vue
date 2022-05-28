<template>
    <div style="height: 27rem">
        <UseElementVisibility v-slot="{isVisible}">
            <iframe :style="{'pointer-events':shouldDisableScrolling?'none':'all'}"
                    v-if="isVisible || wasCreated" v-lazy="src" loading="lazy" class="w-full h-full"
                    @load="appear"></iframe>
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
    data() {
        return {
            wasCreated: false,
        }
    },
    mixins: [VueScreenSizeMixin],
    computed:{
        shouldDisableScrolling(){
            return this.$vssWidth < 800
        }
    },
    methods:{
        appear() {
            this.wasCreated = true
        }
    }
}
</script>
