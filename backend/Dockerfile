# Use Node.js base image
FROM node:18

# Set working directory to backend folder (because your server.js is there)
WORKDIR /app/backend

# Copy only backend-specific package files
COPY backend/package*.json ./

# Install dependencies for the backend
RUN npm install

# Copy the entire backend source code (not the whole monorepo)
COPY backend/ .

# Expose port if needed (optional but good practice for local Docker testing)
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
