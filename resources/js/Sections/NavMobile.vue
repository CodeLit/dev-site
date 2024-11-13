<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BButton from '@components/common/b-Button.vue'
import BLanguageButton from '@sections/LanguageDropdown.vue'
import MenuIcon from 'vue-ionicons/dist/md-menu.vue'
import { Link, router } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { isActiveRoute, routes } from '@/App/routes.js'

const navToggled = ref(false)
const { t } = useI18n()

const toggleNav = () => {
    navToggled.value = !navToggled.value
}


const navigateTo = (routeName) => {
    toggleNav()
    router.visit(route(routeName))
}
</script>

<template>
    <div>
        <div class="flex">
            <Link
                v-if="!navToggled"
                :href="route('home')"
                class="mr-auto inline-block text-center nav-logo flex-shrink-0 relative self-start"
            >
                <bButton class="active w-full h-full nav-logo__button">
                    <div
                        class="nav-logo__div absolute left-1/2 top-1/2 text-white"
                        style="transform: translateX(-50%) translateY(-55%)"
                    >
                        {{ '<\/> DEV' }}
                    </div>
                </bButton>
            </Link>

            <div id="nav-list" :class="navToggled ? 'flex' : 'hidden'" class="flex-row flex-wrap">
                <bButton
                    v-for="r in routes"
                    :key="r.name"
                    :class="{ active: isActiveRoute(r.name) }"
                    class="nav_link inline-block col-2 rounded-full text-sm px-3 py-2 flex-nowrap"
                    @click="navigateTo(r.name)"
                >
                    {{ t(r.trans) }}
                </bButton>
            </div>

            <div class="flex items-center ml-auto h-fit">
                <b-language-button class="lang_btn mr-2" />

                <!-- Toggle button for mobile navigation -->
                <bButton id="nav-toggle" class="nav-toggle" @click="toggleNav">
                    <menu-icon h="30px" style="fill: white" w="30px" />
                </bButton>
            </div>
        </div>
    </div>
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

#nav-list {
    .nav_link {
        margin-right: 5px;
        margin-bottom: 5px;
    }
}

.lang_btn {
    width: 50px;
    height: 50px;
}

.nav-toggle {
    border-radius: 0.5em;
    padding: 0.7em;
    line-height: 0;
}
</style>
