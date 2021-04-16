
module.exports = {

  // connects postgres to node via pg module
  development: {
    client: 'pg',
    connection: {
      database: 'inventory',
      user:     'postgres',
      password: '5700'
    },
    migrations: {
      folder: './db/migrations'
    }
  },
};
