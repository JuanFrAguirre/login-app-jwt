# bashCopy code
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

EXPOSE 8080

# Install the application dependencies
RUN yarn

# Define the entry point for the container
CMD ["yarn", "start"]