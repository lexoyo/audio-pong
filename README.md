
This is a small nodejs server for your raspberry 3. 

It serves a sound board to your phone, you click on a tile to play a sound on you phone and another sound will be played on the raspberry, making a fun effect like ping pong, reload and fire, smash and cry...

![Screenshot](Screenshot from 2016-08-02 12-54-24.png)

## Install on a raspberry 3

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
