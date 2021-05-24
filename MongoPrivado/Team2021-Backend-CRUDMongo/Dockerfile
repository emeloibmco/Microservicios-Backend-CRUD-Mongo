
FROM node:12.18.1

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]