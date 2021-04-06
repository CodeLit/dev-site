<template>
    <button class="p-5 button-blurred bg-white-gradient text-white">
        <slot></slot>
    </button>
</template>

<style lang="sass" scoped>
@use '../../sass/variables' as vars;
.button-blurred{
    backdrop-filter: blur(79px);
    background: linear-gradient(rgba(255, 255, 255, 0.1),vars.$blur);
    /* Note: backdrop-filter has minimal browser support */
    box-shadow: 0 -1px rgba(255, 255, 255, 0.5) inset;
    transition: all 0.4s ease-in;
}
.button-blurred:hover{
    box-shadow: 0 -1px white inset
}
.button-blurred.active,:focus,:focus-within{

    background: linear-gradient(vars.$blur,rgba(255, 255, 255, 0.3));
    outline: none;
}
</style>
