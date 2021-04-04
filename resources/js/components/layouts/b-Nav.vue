<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <a
            href="#"
            class="block text-center nav-logo flex-shrink-0 text-4xl rounded-full w-24 h-24 relative self-start"
        >
            <img src="../../../images/logo-circle.svg" class="w-full h-full" />
            <div
                class="absolute left-1/2 top-1/2 text-white"
                style="transform: translateX(-50%) translateY(-55%)"
            >
                Blog
            </div>
        </a>

        <div id="nav-list" class="hidden sm:flex">
            <b-button
                v-for="(v, k) in getPages"
                :key="(v, k)"
                @click.native="setPage(k)"
                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6  flex-nowrap"
                :class="[{ active: getCurrentPage === k }]"
            >
                {{ v.title }}
            </b-button>
        </div>
        <b-button
            id="nav-toggle"
            @click.native.prevent="changeLinksState"
            class="sm:hidden"
            ><ion-icon name="menu-sharp" size="large"></ion-icon
        ></b-button>
    </nav>
</template>

<script>
export default {
    methods: {
        setPage(page) {
            this.$store.commit('setCurrentPage', page)
        },
        changeLinksState() {
            $('#nav-list').toggleClass('hidden')
        },
    },
    computed: {
        getPages() {
            return this.$store.getters.getPages
        },
        getCurrentPage() {
            return this.$store.getters.getCurrentPage
        },
    },
}
</script>
