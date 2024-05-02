<template>
    <div class='google-frame-wrapper'>
        <iframe v-show="loaded" :src='src' class="google-frame" title="Google Documents Folder"
                @load="loaded = true"></iframe>
        <v-progress-circular v-if="!loaded" :size="70" indeterminate></v-progress-circular>
    </div>
</template>

<script>
export default {
    name: 'b-Documents',
    props: ['src'],
    data: () => ({
        loaded: false,
    }),
}
</script>

<style lang="scss" scoped>
.google-frame-wrapper {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .google-frame {
        width: 100%;
        min-height: 500px;
        border: 0;
    }
}
</style>
