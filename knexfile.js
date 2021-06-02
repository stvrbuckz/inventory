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
      folder: './migrations'
    }
  },
  test: {
    debug: true,
    client: 'pg',
    connection: {
      database: 'inventory_test',
      user:     'postgres',
      password: '5700'
    },
    migrations: {
      folder: './migrations'
    }
  },
};