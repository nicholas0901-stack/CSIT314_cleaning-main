# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app/backend

# Copy only package files first
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# ✅ Copy entire backend directory (this includes images/)
COPY backend .   

# Optional: expose port for clarity
EXPOSE 5000

# Start your backend server
CMD ["node", "server.js"]
