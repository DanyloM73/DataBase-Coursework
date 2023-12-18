'use strict';

const requestController = require('../controllers/requestController');

const requestRoutes = async (fastify, options) => {
    fastify.post('/request', requestController.addRequest);
    fastify.get('/request/:id', requestController.getMediaById);
    fastify.delete('/request/:id', requestController.deleteRequestById);
};

module.exports = requestRoutes;