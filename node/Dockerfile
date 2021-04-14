FROM node:14.15.1
WORKDIR /demo
COPY package.json .
RUN npm install pm2 -g
RUN npm install
EXPOSE 3001
CMD ["pm2-runtime", "start", "index.js"]
COPY . .