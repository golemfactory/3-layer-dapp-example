# syntax=docker/dockerfile:1.4
FROM node:lts AS development

ENV PORT=3000
ENV CI=true

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code

FROM development AS builder

RUN npm run build

FROM nginx:1.23-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/build /usr/share/nginx/html


EXPOSE 3000
