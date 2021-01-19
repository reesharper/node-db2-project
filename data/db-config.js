const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const configs = require('../knexfile');

const db = knex(configs[env]);

module.exports = db;