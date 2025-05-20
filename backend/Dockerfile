# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app/backend

# Copy package.json first to leverage Docker cache
COPY backend/package*.json ./

# Install dependencies
RUN npm install

#  Copy entire backend source, including images/
COPY backend .    # no trailing slash on target — keeps folder structure

# Expose port for Render or local
EXPOSE 5000

# Start the backend
CMD ["node", "server.js"]
