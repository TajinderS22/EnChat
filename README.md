

A minimalist and efficient chat application built with modern web technologies.

## Description

EnChat is a real-time chat application designed for simplicity and performance. It features end-to-end encryption, secure authentication, and a clean user interface.

## Features

- Real-time messaging
- End-to-end encryption
- User authentication
- Chat rooms and private chats
- Responsive web interface

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, WebSocket
- **Database**: Prisma with PostgreSQL
- **Encryption**: Custom E2E encryption
- **Build Tool**: TurboRepo

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TajinderS22/EnChat
   cd EnChat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Ensure PostgreSQL is running.
   - Update the database URL in `packages/db/prisma/.env` or set `DATABASE_URL` environment variable.
   - Run migrations:
     ```bash
     cd packages/db
     npx prisma migrate dev
     ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values (if any).

## Usage

1. Start the development servers:
   ```bash
   npm run dev
   ```
   This will start all apps using TurboRepo.

2. Open the web app at `http://localhost:3000`.

3. The HTTP server runs on port 3001, WebSocket on another port.

## Project Structure

- `apps/web/`: Next.js web application
- `apps/http-server/`: Express API server
- `apps/websocket/`: WebSocket server for real-time communication
- `packages/db/`: Database schema and Prisma client
- `packages/encryption/`: Encryption utilities
- `packages/ui/`: Shared UI components
- `packages/eslint-config/`: ESLint configurations
- `packages/typescript-config/`: TypeScript configurations

## Scripts

- `npm run dev`: Start development servers
- `npm run build`: Build all apps
- `npm run lint`: Run linting
- `npm run format`: Format code
- `npm run check-types`: Check TypeScript types

## Author

Tajinder Singh

## License

MIT
