<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <a
            href="/"
            class="block text-center nav-logo flex-shrink-0 text-4xl rounded-full w-24 h-24 relative self-start"
        >
            <img :src="circleImage" class="w-full h-full" />

            <div
                class="absolute left-1/2 top-1/2 text-white"
                style="transform: translateX(-50%) translateY(-55%)"
            >
                Blog
            </div>
        </a>

        <div id="nav-list" class="hidden sm:flex">
            <router-link to="/foo">Перейти к Foo</router-link>

            <b-button
                v-for="(v, k) in getPages"
                :key="(v, k)"
                @click.native="setCurrentPage(k)"
                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6  flex-nowrap"
                :class="[{ active: getCurrentPage === k }]"
            >
                {{ v }}
            </b-button>
        </div>
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
import BButton from "../bButton";

export default {
    components: {BButton},
    data() {
        return { circleImage }
    },
    methods: {
        setCurrentPage(page) {
            this.$store.commit('setCurrentPage', page)
        },
        changeLinksState() {
            $('#nav-list').toggleClass('hidden')
        },
    },
    computed: {
        getPages() {
            return this.$store.getters.pages
        },
        getCurrentPage() {
            return this.$store.getters.currentPage
        },
    },
}
</script>
