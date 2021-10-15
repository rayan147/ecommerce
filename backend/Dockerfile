FROM node:16-alpine3.11
WORKDIR /app
COPY package.*json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]
