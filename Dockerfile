# Stage 1: Install dependencies
FROM node:18-alpine AS deps

WORKDIR /app

# Install dependencies based on the package.json and package-lock.json
COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

# Copy over the Prisma schema if needed for Prisma migration or generation
COPY prisma ./prisma/

# Stage 2: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy the files needed for building the app
COPY . .

# Install dependencies again to ensure that build time dependencies are also installed
COPY --from=deps /app/node_modules ./node_modules

# Build the application
RUN npm run build

# Stage 3: Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm install --production --frozen-lockfile

# Copy necessary build files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose the port Next.js will run on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV production

# Start the Next.js application
CMD ["npm", "run", "start"]
