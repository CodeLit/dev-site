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
    const ua = navigator.userAgent || navigator.vendor || window.opera
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase())
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

