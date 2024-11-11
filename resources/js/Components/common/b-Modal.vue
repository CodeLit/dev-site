<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useDevSiteStore } from '@/App/store.js'
import BCard from './b-Card.vue'
import BButton from './b-Button.vue'

const devSiteStore = useDevSiteStore()
const modalIndex = ref(0)

onMounted(() => {
    devSiteStore.openModal()
    modalIndex.value = devSiteStore.openedModalsCount
})

onUnmounted(() => {
    devSiteStore.closeModal()
})

const zIndex = computed(() => modalIndex.value + 100)

watch(
    () => devSiteStore.openedModalsCount,
    (newCount) => {
        if (newCount <= 0) {
            emit('close')
        }
    },
)
</script>

<template>
    <div :ref="'modal-' + modalIndex" :style="{ 'z-index': zIndex }" class="modal">
        <b-card class="modal-content p-5">
            <div class="flex">
                <div>
                    <slot></slot>
                </div>
                <div class="ml-3">
                    <b-button class="close block px-3 py-1 rounded" @click="$emit('close')">X</b-button>
                </div>
            </div>
        </b-card>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
