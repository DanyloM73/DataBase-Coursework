'use strict';

const requestController = require('../controllers/requestController');

const requestRoutes = async (fastify, options) => {
    fastify.post('/', requestController.addRequest);
    fastify.get('/:id', requestController.getMediaByRequestId);
    fastify.delete('/:id', requestController.deleteRequestById);
};

module.exports = requestRoutes;