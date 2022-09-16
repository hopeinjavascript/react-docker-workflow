FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
# RUN apt-get update && apt-get install -y vim // if you need vim inside your container to edit files if need bv be...
CMD ["npm", "start"]