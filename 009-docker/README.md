Задание 1 - Docker CLI

1) docker pull busybox 

latest: Pulling from library/busybox
Digest: sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Status: Downloaded newer image for busybox:latest
docker.io/library/busybox:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview busybox

2) docker run --name pinger busybox ping -c 7 netology.ru 

PING netology.ru (188.114.99.224): 56 data bytes
64 bytes from 188.114.99.224: seq=0 ttl=63 time=59.870 ms
64 bytes from 188.114.99.224: seq=2 ttl=63 time=55.126 ms
64 bytes from 188.114.99.224: seq=4 ttl=63 time=65.926 ms
64 bytes from 188.114.99.224: seq=5 ttl=63 time=94.556 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 55.126/72.331/94.612 ms

3) docker ps 

CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

docker ps -a 

CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
e4c26772cb52   busybox   "ping -c 7 netology.…"   25 seconds ago   Exited (0) 18 seconds ago             pinger


4) docker logs pinger

PING netology.ru (188.114.99.224): 56 data bytes
64 bytes from 188.114.99.224: seq=0 ttl=63 time=59.870 ms
64 bytes from 188.114.99.224: seq=2 ttl=63 time=55.126 ms
64 bytes from 188.114.99.224: seq=4 ttl=63 time=65.926 ms
64 bytes from 188.114.99.224: seq=5 ttl=63 time=94.556 ms
64 bytes from 188.114.99.224: seq=6 ttl=63 time=94.612 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 55.126/72.331/94.612 ms

5) docker start pinger

pinger

6) docker ps -a 

CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                     PORTS     NAMES
e4c26772cb52   busybox   "ping -c 7 netology.…"   17 minutes ago   Exited (0) 2 minutes ago             pinger

7) docker logs pinger

PING netology.ru (188.114.99.224): 56 data bytes
64 bytes from 188.114.99.224: seq=0 ttl=63 time=59.870 ms
64 bytes from 188.114.99.224: seq=1 ttl=63 time=71.437 ms
64 bytes from 188.114.99.224: seq=2 ttl=63 time=55.126 ms
64 bytes from 188.114.99.224: seq=3 ttl=63 time=64.794 ms
64 bytes from 188.114.99.224: seq=4 ttl=63 time=65.926 ms
64 bytes from 188.114.99.224: seq=5 ttl=63 time=94.556 ms
64 bytes from 188.114.99.224: seq=6 ttl=63 time=94.612 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 55.126/72.331/94.612 ms
PING netology.ru (188.114.99.224): 56 data bytes
64 bytes from 188.114.99.224: seq=0 ttl=63 time=66.724 ms
64 bytes from 188.114.99.224: seq=1 ttl=63 time=157.250 ms
64 bytes from 188.114.99.224: seq=2 ttl=63 time=49.681 ms
64 bytes from 188.114.99.224: seq=3 ttl=63 time=81.093 ms
64 bytes from 188.114.99.224: seq=4 ttl=63 time=126.453 ms
64 bytes from 188.114.99.224: seq=5 ttl=63 time=167.006 ms
64 bytes from 188.114.99.224: seq=6 ttl=63 time=118.780 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 49.681/109.569/167.006 ms

8) Команда ping была запущена 2 раза и было отправлено 14 запросов. 

9) docker rm pinger

pinger

10) docker rmi busybox

Untagged: busybox:latest
Untagged: busybox@sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Deleted: sha256:a416a98b71e224a31ee99cff8e16063554498227d2b696152a9c3e0aa65e5824
Deleted: sha256:3d24ee258efc3bfe4066a1a9fb83febf6dc0b1548dfe896161533668281c9f4f

Задание 2 - Environment Variables

1) docker pull node:15.14

15.14: Pulling from library/node
bfde2ec33fbc: Pull complete
787f5e2f1047: Pull complete
7b6173a10eb8: Pull complete
dc05be471d51: Pull complete
55fab5cadd3c: Pull complete
bd821d20ef8c: Pull complete
6041b69671c6: Pull complete
989c5d2d2313: Pull complete
4b57d41e8391: Pull complete
Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Status: Downloaded newer image for node:15.14
docker.io/library/node:15.14

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview node:15.14

2) docker run -it --name mynode -e NAME=Stanislav -e SURNAME=Ivanov node:15.14

Welcome to Node.js v15.14.0.      
Type ".help" for more information.
>

3) console.log(`Привет ${process.env.NAME} ${process.env.SURNAME}!`);

Привет Stanislav Ivanov!

4) Ctrl+C (2)

5) docker rm mynode
   docker rmi node:15.14

Untagged: node:15.14
Untagged: node@sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Deleted: sha256:3d3f41722daf1a77c34d6eade6676bbffa2d6a2a21095de2ab0c427a5c942fc9
Deleted: sha256:601382991a159cfc5013ad973158f30b7b7a913e8d7e547b3456deab3ad98022
Deleted: sha256:d5db49eecae8c02c9ea3a79f89c43ded9162bac118a0302a7b514d0df82aa112
Deleted: sha256:a2c1973858d0aad3de0927294602b17c8ef9050c30e0f461e0868997a08552a4
Deleted: sha256:a0153172017a08a521a8be971ca4dcb5fbc4b7227642c12bbb2da6265bd66b50
Deleted: sha256:f1123940e954d335d91b52a40fab4f8144f38ff113ade7d65663071d0f06da6f
Deleted: sha256:f1f4fbb0e7e6e0ce2d9eae1e577f9f6df0a719dd874bff00b2d08895c75c297d
Deleted: sha256:1eb455ab6d45fdbbd90fccff791ffa228080c052acf464f8da1b1d78650bd706
Deleted: sha256:1dbe832a694971a925d7d216f49b700c95f402bd72288f9d37eceb1d59dcf72d
Deleted: sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7