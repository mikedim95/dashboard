# Use an official Node.js runtime for ARM architecture as a base image
FROM arm64v8/node:current-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies

RUN npm install
# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Define the command to run your Next.js application
CMD ["npm", "start"]
