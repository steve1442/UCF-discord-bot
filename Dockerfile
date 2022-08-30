FROM node:latest
USER root
WORKDIR /usr/src/bot
COPY package.json /usr/src/bot/
RUN npm install
COPY . /usr/src/bot
COPY ./UCF-discord-bot/.env /user/src/bot/UCF-discord-bot
WORKDIR /usr/src/bot/UCF-discord-bot/
CMD ["node", "index.js"]