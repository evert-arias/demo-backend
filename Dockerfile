FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependecies
COPY package*.json ./

RUN npm install

# Copy app source code 
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD [ "npm", "start" ]