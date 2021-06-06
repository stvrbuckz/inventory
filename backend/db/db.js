// reuses knex connection throughout the app
const knex = require('knex');
const { Model } = require('objection');


const knexConfig = require('../../knexfile');
const environment = process.env.NODE_ENV || 'development';
const connectionConfig = knexConfig[environment];

const connection = knex(connectionConfig);

// setting up this model anywhere will talk to the db
Model.knex(connection);

module.exports = connection;