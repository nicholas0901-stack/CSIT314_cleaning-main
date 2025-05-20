# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install backend dependencies
RUN npm install

# ✅ Copy everything inside ./backend (since we're already in it)
COPY . .

# Optional: expose port
EXPOSE 5000

# Start your backend server
CMD ["node", "server.js"]
