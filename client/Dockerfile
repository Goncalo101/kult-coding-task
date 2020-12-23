FROM node:15.2.1-alpine3.10

# Create app directory
WORKDIR /usr/client
COPY . ./
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
