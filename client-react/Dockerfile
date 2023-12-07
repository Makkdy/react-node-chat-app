# FROM node:12.2.0-alpine as build
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]

#stage 1
FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_CHAT_ENGINE_PROJECT_ID
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ENV REACT_APP_CHAT_ENGINE_PROJECT_ID=$REACT_APP_CHAT_ENGINE_PROJECT_ID
RUN npm run build

#stage 2
FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ENV REACT_APP_CHAT_ENGINE_PROJECT_ID=$REACT_APP_CHAT_ENGINE_PROJECT_ID
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]