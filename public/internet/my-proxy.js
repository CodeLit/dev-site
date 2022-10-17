function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "music.youtube.com|2ip.ru"))
        return "PROXY 51.38.191.30:7497";

    // by default use no proxy
    return "DIRECT";
}
