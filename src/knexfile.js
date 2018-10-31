// Update with your config settings.
const { user,password } = require('./.env');

module.exports = {
    client: 'mysql',
    connection: {
      host : '192.168.222.129',
      database: 'worship',
      user,
      password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
