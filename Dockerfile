FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependecies
COPY package*.json ./

RUN npm ci --only=production

# Copy app source code 
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD [ "npm", "start" ]