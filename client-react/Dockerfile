# FROM node:12.2.0-alpine as build
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]

#stage 1
FROM node:16.10.0-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

#stage 2
FROM nginx:1.19.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]