<template>
    <div class="blurred-card">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/variables' as vars;

.blurred-card {
    color: white;
    background-color: vars.$blur;
    backdrop-filter: blur(5px);
    border-radius: 1em;
    //   border-image: linear-gradient(to right bottom, #ffffff, #ffffff00, #ffffff00);
}
</style>
