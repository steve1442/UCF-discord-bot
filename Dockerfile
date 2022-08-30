FROM node:lts-alpine3.9USER rootENV APP /usr/src/APPCOPY package.json /tmp/package.jsonRUN cd /tmp && npm install --loglevel=warn \
    && mkdir -p $APP \
    && mv /tmp/node_modules $APPCOPY src $APP/srcCOPY package.json $APPCOPY tsconfig.json $APPWORKDIR $APPRUN npm run buildCMD [ "node", "dist/index.js" ]