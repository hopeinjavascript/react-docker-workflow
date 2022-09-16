FROM node
WORKDIR /app
COPY package.json .
# RUN is for/during build time
RUN npm install
COPY . .
# default PORT basically default env if used in the file
ENV PORT 3000
# it is just for the documentation purpose
EXPOSE $PORT
# if you need vim inside your container to edit files if need be...
# RUN apt-get update && apt-get install -y vim 
# CMD is for runtime
# passing args in an array doesn't invoke a new shell
CMD ["npm", "start"]
# passing args without an array does invoke a new shell
# CMD npm start
