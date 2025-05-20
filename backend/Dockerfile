# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Now copy the rest of your backend source code
COPY . .

# Start server
CMD ["node", "server.js"]
