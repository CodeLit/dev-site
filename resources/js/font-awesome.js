import {library, dom} from "@fortawesome/fontawesome-svg-core";
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons"

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

library.add(faTelegramPlane)

// Vue.component('fa-icon', FontAwesomeIcon) // Vue component, see https://github.com/FortAwesome/vue-fontawesome
