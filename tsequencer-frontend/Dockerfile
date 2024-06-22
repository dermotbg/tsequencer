FROM node as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx as serve-stage

COPY --from=build-stage /usr/src/app/dist /var/www