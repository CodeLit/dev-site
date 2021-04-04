<template>
    <button class="p-5 button-blurred bg-white-gradient text-white">
        <slot></slot>
    </button>
</template>

<style lang="sass" scoped>
.button-blurred{
    backdrop-filter: blur(79px);
    /* Note: backdrop-filter has minimal browser support */
    box-shadow: 0 -1px white inset
}
.button-blurred:hover{
    background: linear-gradient(#f5ae00, #f59500) #f5ae00;
}
.button-blurred:focus{
    outline: none;
}
.button-blurred:active,:focus{
    box-shadow: 0 -1px yellow inset
}
</style>
