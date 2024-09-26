# Step 1: Use Node.js base image
FROM node:18.18.0-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Generate Prisma Client
RUN npx prisma generate

# Step 7: Build the Next.js application
RUN npm run build

# Step 8: Expose the Next.js port (3000 by default)
EXPOSE 3000

# Step 9: Set the environment variable for Prisma to use production mode
ENV NODE_ENV=production

# Step 10: Start the Next.js application
CMD ["npm", "run", "start"]
