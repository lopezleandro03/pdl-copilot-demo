# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the app files into the container
COPY /app .

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["node", "snake.js"]