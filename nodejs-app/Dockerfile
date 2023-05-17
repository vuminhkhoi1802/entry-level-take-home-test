FROM node:18

WORKDIR /app

COPY package*.json ./

RUN ls -al

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start:dev" ]