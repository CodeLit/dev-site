<template>
    <div class="blurred-card" :style="cardStyles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            blur_amount: {
                default: 5,
                type: Number
            }
        },
        computed:{
            cardStyles(){
                return {
                    'backdrop-filter': `blur(${this.blur_amount}px)`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../../scss/variables' as vars;

.blurred-card {
    color: white;
    background-color: vars.$blur;
    border-radius: 1em;
    //   border-image: linear-gradient(to right bottom, #ffffff, #ffffff00, #ffffff00);
}
</style>
