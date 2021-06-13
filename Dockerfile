FROM node:14-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npx ng build --configuration production --output-path=/dist


FROM nginx:1.20.1-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /dist /usr/share/nginx/html
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
