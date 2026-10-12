import { PostgresStore } from '@mastra/pg';

export const pStore = new PostgresStore({
  id: 'signalcast-store',
  connectionString: process.env.DATABASE_URL!,
});
