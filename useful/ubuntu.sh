# Дефолт настройка таблиц
iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT
/sbin/iptables-save

# Сбросить таблицы
iptables -t mangle -F
iptables -F
iptables -X
