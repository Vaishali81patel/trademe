FROM node:8.7.0-alpine
#1 Create app directory

#2 
RUN mkdir -p /srv/app/admin-server
WORKDIR /srv/app/admin-server
# Install app dependencies

#3
COPY package.json /srv/app/admin-server
COPY package-lock.json /srv/app/admin-server

#4
RUN npm install --silent

#5
COPY . /srv/app/admin-server
# Copy app source code

#6
COPY . /srv/app/admin-server

#7
CMD [ "npm", "start" ]