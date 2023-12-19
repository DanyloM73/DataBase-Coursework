'use strict';

const originController = require('../controllers/originController');

const originRoutes = async (fastify, options) => {
    fastify.post('/', originController.addOrigin);
    fastify.delete('/:id', originController.deleteOriginById);
}

module.exports = originRoutes;