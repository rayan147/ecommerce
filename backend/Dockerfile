FROM node:14.17.3-buster as api
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i 

COPY . .

CMD ["npm", "run", "start"]

# NGNINX Web Server
# FROM nginx as prod
# COPY --from=api /app/backend/default.conf /etc/nginx/conf.d/
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]
