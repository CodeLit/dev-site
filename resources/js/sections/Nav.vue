<script setup>
import { useI18n } from 'vue-i18n'
import BButton from '@components/common/b-Button.vue'
import BLanguageButton from '@sections/LanguageDropdown.vue'
import { Link } from '@inertiajs/vue3'
import { changePage, routes } from '@/app/routes.js'
import { route } from 'ziggy-js'


const { t } = useI18n()

</script>

<template>
    <nav class="navbar mt-3 mb-1 flex items-center justify-between">
        <Link
            class="block text-center nav-logo flex-shrink-0 relative self-start"
            :href="route('home')"
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
            <b-button
                v-for="r in routes"
                :key="r.name"
                :class="{ active: isActiveRoute(r.name) }"
                class="inline-block col-2 rounded-full px-6 py-3 lg:mx-6 flex-nowrap"
                @click="() => changePage(route(r.name))"
            >
                {{ t(r.trans) }}
            </b-button>

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
