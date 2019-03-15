FROM node:10

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "npm", "start"]
