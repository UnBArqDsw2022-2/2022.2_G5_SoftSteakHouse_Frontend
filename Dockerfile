FROM node:alpine
WORKDIR /src
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]
