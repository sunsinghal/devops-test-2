FROM node:8.15-alpine

#installs git
RUN apk add --update git

# copy psckage.json and package-lock.json file
COPY package*.json ./

# install node packages and cleaning the cache forcefully
RUN npm set progress=false && \
    npm install && \
    npm cache clean --force
	
# copy other app files
COPY . .

# run npm run start to start the server
CMD npm run start