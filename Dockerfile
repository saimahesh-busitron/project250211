FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package.json .

# Run the command inside your image filesystem
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 5173

# Run the specified command within the container
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host"]