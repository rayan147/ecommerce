FROM node:14.17.3-buster as api
WORKDIR /backend

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i 

COPY . .
CMD ["npm", "run", "start"]


