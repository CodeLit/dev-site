<template>
    <div style="height: 27rem">
        <UseElementVisibility v-slot="{isVisible}">
            <iframe v-if="isVisible || wasCreated"
                    v-lazy="src" :style="{'pointer-events':shouldDisableScrolling?'none':'all'}" class="w-full h-full" loading="lazy"
                    title="Google Document"
                    @load="appear"></iframe>
        </UseElementVisibility>
    </div>
</template>

<script setup>
import { UseElementVisibility } from '@vueuse/components'</script>

<script>
import { VueScreenSizeMixin } from 'vue-screen-size'

export default {
    props: ['src'],
    data() {
        return {
            wasCreated: false,
        }
    },
    mixins: [VueScreenSizeMixin],
    computed: {
        shouldDisableScrolling() {
            return this.$vssWidth < 800
        },
    },
    methods: {
        appear() {
            this.wasCreated = true
        },
    },
}
</script>
