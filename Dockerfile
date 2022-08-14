FROM node:16.10.0-alpine3.11 AS base

RUN mkdir -p /opt/node_app/app
WORKDIR /opt/node_app

COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force && npm update --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

WORKDIR /opt/node_app/app
COPY . .
RUN npx prisma generate

FROM base as dev

RUN apk add --no-cache mysql-client

CMD ["npm", "run", "dev"]

FROM base as ci

RUN apk add --no-cache mysql-client

FROM base as prod

CMD ["npm", "run", "start"]