# Dockerfile (place in project root)
FROM node:18
WORKDIR /app

# Copy package files first for caching installs
COPY package*.json ./
RUN npm install --production

# Copy rest of app
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
