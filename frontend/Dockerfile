FROM node:14.17.3-buster as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN rm -rf node_modules

RUN npm ci --production

COPY . .

RUN npm run build 

# NGNINX Web Server
FROM nginx as prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
