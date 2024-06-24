FROM node as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

CMD [ "cp", "-r", "./dist/.", "../tsequencer-backend/wwwroot/" ]

FROM nginx as serve-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html