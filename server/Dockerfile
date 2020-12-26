FROM node:15.2.1-alpine3.10

WORKDIR /usr/server
COPY . ./

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]
