# Base image for the application
ARG NODE_VERSION=18.16.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js/Prisma"

# Set the working directory
WORKDIR /app

# Set the production environment
ENV NODE_ENV="production"

# Build stage
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y build-essential openssl pkg-config python-is-python3

# Copy package files and install dependencies
COPY --link package-lock.json package.json ./
RUN npm ci

# Generate Prisma Client
COPY --link prisma ./
RUN npx prisma generate

# Copy the rest of the application code
COPY --link . .

# Debugging step: List the contents of /app/dist to verify the build output
RUN ls -la /app/dist

# Final stage for app image
FROM base

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y openssl && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built application from the build stage
COPY --from=build /app /app

# Debugging step: List the contents of /app and /app/dist in the final image
RUN ls -la /app
RUN ls -la /app/dist

# Expose the application port
EXPOSE 3000

# Start the server by default
CMD [ "npm", "run", "start" ]
