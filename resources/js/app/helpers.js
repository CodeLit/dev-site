export function importImg(path) {
    const assets = import.meta.glob('/resources/img/**', { eager: true })
    const fullPath = '/resources/img' + path
    return assets[fullPath] ? assets[fullPath].default : null
}

export function isMobile() {
    const ua = navigator.userAgent || navigator.vendor || window.opera
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase())
}
