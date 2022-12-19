FROM node:alpine
WORKDIR /src
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
EXPOSE 8000
CMD ["yarn", "dev"]
