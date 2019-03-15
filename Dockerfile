FROM node:8.15-alpine

# copy psckage.json and package-lock.json file
COPY package*.json ./

# install node packages and cleaning the cache forcefully
RUN npm set progress=false && \
    npm install && \
    npm cache clean --force
	
# copy other app files
COPY . .