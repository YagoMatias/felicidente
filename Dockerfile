FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev
