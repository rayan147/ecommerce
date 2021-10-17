FROM node:16.0.0-buster as api
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN rm -rf node_modules

RUN npm i 


COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]


