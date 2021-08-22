<template>
    <header class="w-full p-7" :class="[{ 'md:absolute':  getCurrentRouteParams['header_absolute']}]">
        <b-nav />
    </header>
</template>


<script>
export default {
    methods: {
        getPages(){
            return this.$router.options.routes
        },
    },
    computed: {
        getCurrentRouteParams() {
            let route = this.$route
            this.getPages().forEach(function (item){
                if (item.path === route.path)
                    return item
            })
        }
    }
}
</script>
