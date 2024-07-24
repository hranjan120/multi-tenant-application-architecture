FROM node:22.4.0-alpine3.19
WORKDIR /app/bacckend-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8002
CMD ["npm", "run", "container"]