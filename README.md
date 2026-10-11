# Signalcast

Signalcast is a social media scheduler: write a post once, adapt it per network, schedule it on a shared calendar, publish automatically and see how it performed. AI agents can draft and schedule through the public API and MCP server.

Signalcast is a fork of [Postiz](https://github.com/gitroomhq/postiz-app) and is licensed under the [GNU AGPL-3.0](./LICENSE). See [NOTICE](./NOTICE) for attribution and [CHANGES-FORK.md](./CHANGES-FORK.md) for what this fork changes.

## Stack

- `apps/frontend` Next.js
- `apps/backend` NestJS API
- `apps/orchestrator` Temporal workers for scheduled publishing
- `libraries/*` shared services, providers and UI
- PostgreSQL, Redis, Temporal

## Local development

Requirements: Node 22 or newer, pnpm 10.6.1, Docker Desktop.

```bash
pnpm install
cp .env.example .env            # then fill in DATABASE_URL, REDIS_URL, JWT_SECRET and the URLs
docker compose -f docker-compose.dev.yaml up -d
pnpm run prisma-db-push
pnpm run dev
```

The frontend runs on http://localhost:4200 and the API on http://localhost:3000. Each social network needs its own developer app; put the client id and secret in `.env` (see `.env.example`).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Security issues: see [SECURITY.md](./SECURITY.md).
