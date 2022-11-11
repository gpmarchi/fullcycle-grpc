import Knex from 'knex';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './grpc.sqlite3',
    timezone: 'UTC',
  },
  useNullAsDefault: true,
  debug: true,
  asyncStackTraces: true,
});

export { knex };
