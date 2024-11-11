export function importImg(path) {
    if (isValidHttpUrl(path)) {
        return path
    }
    const assets = import.meta.glob('/resources/img/**', { eager: true })
    path = '/resources/img' + path
    if (assets[path]) {
        return assets[path].default
    }
}

export function isMobile() {
    if (typeof window === 'undefined') return false

    return (typeof window.orientation !== 'undefined' ||
        navigator.userAgentData?.mobile ||
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ||
        (window.innerWidth <= 768 && 'ontouchstart' in window)
    )
}

export const isValidHttpUrl = function(string) {
    let url

    try {
        url = new URL(string)
    } catch (_) {
        return false
    }

    return url.protocol === 'http:' || url.protocol === 'https:'
}


export const changeLanguage = (newLanguage) => {
    localStorage.setItem('website-locale', newLanguage)
    document.documentElement.setAttribute('lang', newLanguage)
    if (newLanguage === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl')
    } else {
        document.documentElement.setAttribute('dir', 'ltr')
    }
}

