FROM node:18-alpine

LABEL maintainer="atakan422005@gmail.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir node_modules/.vite && chmod -R 777 node_modules/.vite

COPY . .

EXPOSE 5173

USER node

CMD ["npm", "run", "dev"]