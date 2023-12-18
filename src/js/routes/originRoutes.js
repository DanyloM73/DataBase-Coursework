'use strict';

const originController = require('../controllers/originController');

const originRoutes = async (fastify, options) => {
    fastify.post('/origin', originController.addOrigin);
    fastify.delete('/origin/:id', originController.deleteOriginById);
}

module.exports = originRoutes;