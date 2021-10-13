FROM node:16-alpine3.11
WORKDIR /app
COPY package*.json ./
COPY ./ ./
EXPOSE 3000
RUN npm i
CMD ["npm", "run", "start"]

