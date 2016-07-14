FROM ubuntu

# the basics
RUN apt-get update

# node
RUN apt-get install -y npm wget
RUN npm install -g n
RUN n latest

# myapp
WORKDIR /usr/src/myapp
ADD . /usr/src/myapp

EXPOSE 8080

CMD ["npm", "install"]
