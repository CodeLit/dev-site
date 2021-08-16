<template>
    <div class="b-parallax" :style="divStyles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        img_url: {type:String,default:''}
    },
    computed: {
        divStyles() {
            return {
                "background": `url(${this.img_url}) no-repeat fixed center`,
                'background-size': 'cover'
                /*background: radial-gradient(circle at bottom left, $bg-secondary 0%, $bg-primary 100%) no-repeat fixed center;*/
            };
        }
    }
}
</script>
