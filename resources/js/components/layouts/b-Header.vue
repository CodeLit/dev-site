<template>
    <header class="w-full py-2 px-4 md:p-7" :class="[{ 'md:absolute':  getCurrentRouteParams['header_absolute']}]">
        <b-nav />
    </header>
</template>

<script>
export default {
    methods: {
        getRoutes(){
            return this.$router.options.routes
        },
    },
    computed: {
        getCurrentRouteParams() {
            let route = this.$route
            let routes = this.getRoutes()
            for (let i = 0; i < routes.length; i++) {
                let item = routes[i]
                if (item.path === route.path)
                    return item
            }
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 770px) {
    header{
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>
