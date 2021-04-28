FROM node:10

# Create app directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .

RUN npm install

CMD [ "node", "miapp.js" ]   