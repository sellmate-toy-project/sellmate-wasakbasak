FROM node:16-alpine3.14 as base
WORKDIR /app
COPY ./package*.json /app/

ENV PATH /app/node_modules/.bin:$PATH
RUN npm install

# develop-stage
FROM base as develop-stage
EXPOSE 3000
CMD ["npm", "start"]

# production-stage
FROM base as production-stage
ADD . .
RUN npm run build
CMD tail -f /dev/null