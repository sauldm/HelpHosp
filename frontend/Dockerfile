# Etapa 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN mv .env.production .env
RUN npm install && npm run build

# Etapa 2: Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
