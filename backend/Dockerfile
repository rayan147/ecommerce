FROM node:14.17.3-buster as api
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i 
RUN sudo docker run --env-file /.env

COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]


