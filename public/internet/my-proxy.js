function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "music.youtube.com|2ip.ru"))
        return "SOCKS5 46.101.230.20:7497";

    // by default use no proxy
    return "DIRECT";
}
