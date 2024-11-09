<script setup>
import { useI18n } from 'vue-i18n'
import BButton from '@js/components/common/b-Button.vue'
import BLanguageButton from './b-LanguageDropdown.vue'
import { Link, router } from '@inertiajs/vue3'

const { t } = useI18n()

// Navigate to the specified route
const changePage = (routePath) => {
    router.visit(routePath)
}
</script>

<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <Link
            class="block text-center nav-logo flex-shrink-0 relative self-start"
            href="/home"
        >
            <b-button class="active w-full h-full nav-logo__button">
                <div
                    class="nav-logo__div absolute left-1/2 top-1/2 text-white"
                    style="transform: translateX(-50%) translateY(-55%)"
                >
                    {{ '<\/> DEV' }}
                </div>
            </b-button>
        </Link>

        <div id="nav-list" class="hidden sm:flex flex-col sm:flex-row">
            <!--            <b-button-->
            <!--                v-for="route in router.options.routes"-->
            <!--                :key="route.path"-->
            <!--                :class="{ active: router.currentRoute.value.path === route.path }"-->
            <!--                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6 flex-nowrap"-->
            <!--                @click="() => changePage(route.path)"-->
            <!--            >-->
            <!--                {{ t(route.trans) }}-->
            <!--            </b-button>-->

            <b-language-button></b-language-button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav-logo {
    width: 139px;
    height: 57px;
    white-space: nowrap;

    .nav-logo__button {
        border-radius: 0.7em;
    }

    .nav-logo__div {
        font-family: 'Space Mono', monospace;
        font-size: 1.5em;
        line-height: 1em;
        font-variant-ligatures: no-contextual;
    }
}
</style>
