FROM node:16-alpine3.11
WORKDIR /app
COPY package*.json ./
COPY ./ ./
EXPOSE 3000
RUN npm i 
RUN npm run build --prod
CMD ["npm", "run", "start"]

