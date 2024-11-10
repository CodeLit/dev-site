import { dom, library } from '@fortawesome/fontawesome-svg-core'
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {
    faCentos,
    faCss3,
    faDocker,
    faFedora,
    faGitAlt,
    faGithub,
    faGolang,
    faHtml5,
    faJs,
    faLaravel,
    faLinux,
    faModx,
    faNpm,
    faPhp,
    faPython,
    faTelegramPlane,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons'
// import {faAddressCard} from "@fortawesome/free-solid-svg-icons"

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

library.add(faTelegramPlane,faPhp,faJs,faCss3,faHtml5,faPython,faGolang,faNpm,faGitAlt,faGithub,faDocker,faLinux,
    faCentos,faFedora, faLaravel, faVuejs, faModx)

// Vue.component('fa-icon', FontAwesomeIcon) // Vue component, see https://github.com/FortAwesome/vue-fontawesome
