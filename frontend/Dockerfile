FROM node:8.7.0-alpine
#1

RUN mkdir -p /srv/app/admin-client
#2

WORKDIR /usr/src/app
#3

COPY package.json /srv/app/admin-client 
COPY package-lock.json /srv-app/admin-client
COPY .env /srv-app/admin-client
#4

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
#5

COPY . .
#6

CMD ["npm", "start"]
#7