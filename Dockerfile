FROM node:18 

WORKDIR /app

COPY package*.json .

RUN npm install yarn
RUN yarn

COPY . .

EXPOSE 8080

RUN yarn build

CMD [ "yarn", "start" ]