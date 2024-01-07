<template>
    <div>
        <div class='flex'>
            <router-link
                v-if='!nav_toggled'
                :to="{name: 'home'}"
                class='mr-auto inline-block text-center nav-logo flex-shrink-0 relative self-start'
            >
                <b-button class='active w-full h-full nav-logo__button'>
                    <div class='nav-logo__div absolute left-1/2 top-1/2 text-white'
                         style='transform: translateX(-50%) translateY(-55%)'>
                        {{ '<\/> DEV' }}
                    </div>
                </b-button>
            </router-link>

            <div id='nav-list' class='hidden flex flex-col flex-row'>
                <b-button
                    v-for='route in $router.options.routes'
                    :key='route.path'
                    :class='[{ active: $route.fullPath === route.path }]'
                    class='nav_link inline-block col-2 rounded-full px-6 py-3 flex-nowrap'
                    @click='callChangePageMixin(route)'
                >
                    {{ $t(route.trans) }}
                </b-button>
            </div>

            <div class='flex items-center ml-auto h-fit items-center'>
                <b-language-button class='lang_btn mr-2' />

                <!-- For mobile devices, the hide button -->
                <b-button
                    id='nav-toggle'
                    class='nav-toggle'
                    @click.native.prevent='changeLinksState'
                >
                    <menu-icon h="30px" style="fill: white" w="30px" />
                </b-button>
            </div>

        </div>
    </div>
</template>

<script>
import BButton from '../common/b-Button.vue'
import BLanguageButton from './b-LanguageDropdown.vue'
import MenuIcon from 'vue-ionicons/dist/md-menu.vue'

export default {
    name: 'b-NavMobile',
    components: { BLanguageButton, BButton, MenuIcon },
    data: function() {
        return {
            nav_toggled: false,
        }
    },
    methods: {
        changeLinksState() {
            $('#nav-list').toggleClass('hidden').toggleClass('flex')
            this.nav_toggled = !this.nav_toggled
        },
        callChangePageMixin(route) {
            this.changeLinksState()
            this.changePage(route)
        },
    },
}
</script>

<style lang='scss' scoped>
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
