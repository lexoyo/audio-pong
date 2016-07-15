

on your raspberry, install these libs for audio and nodejs

```
sudo apt-get update

# nodejs
sudo apt-get install -y npm wget
sudo npm install -g n
n latest

# audio
sudo apt-get install -y mpg321
```

then start the server

```
$ npm i
$ npm start
```

then open `http://[raspberry IP]:8080` on your phone and enjoy the sound on the 2 devices





---
---

#### Doccker

$ sudo docker build . lexoyo/audio-pong
$ sudo docker run -p 8080:8080 lexoyo/audio-pong



sudo docker run -i -t -p 8080:8080 lexoyo/audio-pong /bin/bash



alsa :


 -v /dev/snd:/dev/snd
 --lxc-conf='lxc.cgroup.devices.allow = c 116:* rwm'
    -v /dev/shm:/dev/shm \
    -v /etc/machine-id:/etc/machine-id \
    -v /run/user/$uid/pulse:/run/user/$uid/pulse \
    -v /var/lib/dbus:/var/lib/dbus \
    -v ~/.pulse:/home/$dockerUsername/.pulse \
