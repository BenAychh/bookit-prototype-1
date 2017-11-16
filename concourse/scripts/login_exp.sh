#!/usr/bin/expect

set timeout 9
set username "benaychh\r"
set password "3T\$x&5uMKXl8\r"

spawn exp login

expect "Username"
send $username

expect "Password:"
send $password

expect "$ "