FROM node:14.17.3-buster as dev

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm i 
EXPOSE 3000
COPY . .

RUN npm run start 

# NGNINX Web Server
# FROM nginx as dev_proxy
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]

FROM node:14.17.3-buster as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm ci --production

COPY . .

RUN npm run build 

# NGNINX Web Server
FROM nginx as prod_proxy
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
