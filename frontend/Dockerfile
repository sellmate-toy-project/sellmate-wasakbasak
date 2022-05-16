FROM node:16-alpine3.14 as base
WORKDIR /app
COPY ./package*.json ./

RUN npm install

# develop-stage
FROM base as develop-stage
EXPOSE 3000
CMD ([ -L /app/node_modules ] && echo "Using linked node_modules" || \
    ([ -d /app/node_modules ] && (echo "Using local node_modules" && cp -RuT /build/node_modules /app/node_modules) || ln -s /build/node_modules /app/node_modules)) && \
    npm run start

# build-stage
FROM base as build-stage
COPY . .
RUN npm run build

FROM nginx:1.19-alpine as production-stage
COPY --from=build-stage /app/build /var/www/html/public
COPY docker/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]