'use strict';

const requestController = require('../controllers/requestController');
const requestSchema = require('../schemas/requestSchema');

const requestRoutes = async (fastify, options) => {
    fastify.post('/', { schema: requestSchema }, requestController.addRequest);
    fastify.get('/:id', requestController.getMediaByRequestId);
    fastify.delete('/:id', requestController.deleteRequestById);
};

module.exports = requestRoutes;
