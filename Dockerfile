FROM node:10.16.3

WORKDIR /code
COPY . /code/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
