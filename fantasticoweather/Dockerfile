FROM node:18-alpine

WORKDIR /fantasticoweather

COPY package.json /fantasticoweather/

RUN npm install

COPY . /fantasticoweather/

EXPOSE 3000

CMD ["npm", "start"]