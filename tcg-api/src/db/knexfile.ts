import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'ash',
    password: 'y0te3lij0',
    database: 'tcgbd',
    port: 5432
  }
});

export default db;
