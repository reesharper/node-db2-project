const express = require('express');

const fruitsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', fruitsRouter);

module.exports = server;
