# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as build
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps -s
COPY . .
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html

# Copy the default nginx.conf
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf