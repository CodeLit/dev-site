<template>
    <button class="button-blurred bg-white-gradient text-white">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use '@scss/variables' as vars;

.button-blurred {
    backdrop-filter: blur(79px);
    background: linear-gradient(rgba(255, 255, 255, 0.1), vars.$blur);
    /* Note: backdrop-filter has minimal browser support */
    box-shadow: 0 -1px rgba(255, 255, 255, 0.5) inset;
    transition: box-shadow 0.4s ease-in;
    overflow: hidden;
}

.button-blurred:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
}

.button-blurred:hover:after {
    transition: left .35s;
    left: 100%;
}

.button-blurred:hover, .button-blurred.active {
    box-shadow: 0 -1px white inset;
}

.button-blurred.active,
:focus,
:focus-within {
    background: linear-gradient(vars.$blur, rgba(255, 255, 255, 0.3));
    outline: none;
}
</style>

