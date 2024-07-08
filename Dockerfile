FROM node:20.15.0 as build

WORKDIR /app

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html