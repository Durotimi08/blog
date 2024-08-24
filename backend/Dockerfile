# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run start

# Expose the port the app runs on
EXPOSE 5000

# Set NODE_ENV to production
ENV NODE_ENV=prod

# Run the application
CMD ["node", "dist/index.js"]