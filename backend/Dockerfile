FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY . src/
COPY   package.json /Users/rayanramirez/google_drive/code/github/rayan147/ecommerce/package.json
COPY ecosystem.config.js .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 5000

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]