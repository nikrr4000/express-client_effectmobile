FROM node:23-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY .env ./

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]