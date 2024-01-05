'use strict';

const originController = require('../controllers/originController');
const originSchema = require('../schemas/originSchema');

const originRoutes = async (fastify, options) => {
    fastify.post('/', { schema: originSchema }, originController.addOrigin);
    fastify.delete('/:id', originController.deleteOriginById);
}

module.exports = originRoutes;
