FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

######################################

FROM nginx:1.16.0-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]