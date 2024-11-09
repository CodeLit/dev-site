<script setup>
import bCard from './b-Card.vue'
import bButton from './b-Button.vue'
</script>

<template>
    <div :ref="'modal-' + modalIndex" :style="{'z-index': zIndex}" class="modal">
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

<script>
export default {
    data() {
        return {
            modalIndex: 0,
        }
    },
    mounted() {
        this.$store.commit('openModal')
        this.modalIndex = this.$store.state.openedModalsCount
    },
    unmounted() {
        this.$store.commit('closeModal')
    },
    computed: {
        zIndex() {
            return this.modalIndex + 100
        },
        openedModalsCount() {
            return this.$store.state.openedModalsCount
        },
    },
    watch: {
        openedModalsCount(newCount, oldCount) {
            if (newCount <= 0) {
                this.$emit('close')
            }
        },
    },
}
</script>

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
