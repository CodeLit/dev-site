import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import persisted from './persisted'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        persisted,
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 3 }),
                removeItem: key => Cookies.remove(key),
            },
        }),
    ],
})
