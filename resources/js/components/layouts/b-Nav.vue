<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <router-link
            :to="{name: 'home'}"
            class="block text-center nav-logo flex-shrink-0 text-4xl rounded-full w-24 h-24 relative self-start"
        >
            <img :src="circleImage" class="w-full h-full" />

            <div
                class="absolute left-1/2 top-1/2 text-white"
                style="transform: translateX(-50%) translateY(-55%)"
            >
                Blog
            </div>
        </router-link>

        <div id="nav-list" class="hidden sm:flex">
            <b-button
                :key="route.path"
                v-for="route in getPages()"
                @click.native="changePage(route)"
                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6 flex-nowrap"
                :class="[{ active: getCurrentPage() === route.path }]"
            >
                {{ route.text }}
            </b-button>
        </div>

<!--        Для мобильных устройств, кнопка скрытия -->
        <b-button
            id="nav-toggle"
            @click.native.prevent="changeLinksState"
            class="sm:hidden p-4"
            ><ion-icon name="menu-sharp" size="large"></ion-icon
        ></b-button>
    </nav>
</template>

<script>
import circleImage from '../../../images/logo-circle.svg'
import BButton from "../b-Button";

export default {
    components: {BButton},
    data() {
        return { circleImage }
    },
    methods: {
        getPages(){
            return this.$router.options.routes
        },
        getCurrentPage() {
            return this.$route.fullPath
        },
        changePage(route){
            let page = route.path
            if (this.getCurrentPage() !== page)
                this.$router.push(page)
        },
        changeLinksState() {
            $('#nav-list').toggleClass('hidden')
        },
    },
}
</script>
