FROM node:8 as builder

MAINTAINER Dsizx
LABEL "version"="1.0.0:beta"
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

ADD ./package.json ./
RUN npm i --silent
ADD . /var/www/app
RUN npm run build
CMD ["npm","start"]


