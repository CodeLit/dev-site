<template>
    <div style="height: 27rem">
        <UseElementVisibility v-slot="{isVisible}">
            <iframe v-if="isVisible" v-lazy="src" loading="lazy" class="w-full h-full"></iframe>
        </UseElementVisibility>
    </div>
</template>

<script setup>
import { UseElementVisibility } from '@vueuse/components'
</script>

<script>
export default {
    props: ['src']
}
</script>
