FROM node:18 

WORKDIR /app

COPY package*.json .

RUN npm install yarn
RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]