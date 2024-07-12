FROM node:20.15.0 as build

WORKDIR /app

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html