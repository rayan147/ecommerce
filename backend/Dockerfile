FROM node:14.17.3-buster as api
WORKDIR /backend

COPY package.json package.json
COPY package-lock.json package-lock.json



COPY . .

RUN npm i 

CMD ["npm", "run", "start"]

# NGNINX Web Server
FROM nginx as prod
COPY --from=api /backend/nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
