# TaskManagementApi

A simple task management REST API built with **NestJS**, **Fastify**, and **TypeScript** using **Vertical Slice Architecture**. The project focuses on learning and practicing backend fundamentals — feature-based organization, dependency injection, validation, testing, and CI/CD setup.

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** NestJS
- **HTTP Adapter:** Fastify
- **Logging:** Pino
- **Architecture:** Vertical Slice Architecture

## Getting Started

```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Run in production mode
npm run start:prod
```

## Project Structure

```
src/
├── features/           # Vertical slices (one folder per feature)
│   ├── tasks/          # Task management feature
│   └── health/         # Health check feature
├── shared/             # Shared utilities, filters, interceptors
├── config/             # Configuration modules
├── app.module.ts       # Root module
└── main.ts             # Application bootstrap
```

## License

MIT
