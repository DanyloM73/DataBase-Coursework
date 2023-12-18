'use strict';

const mediaController = require('../controllers/mediaController');

const mediaRoutes = async (fastify, options) => {
    fastify.post('/media', mediaController.addMedia);
    fastify.get('/media/search/:keyword', mediaController.searchMedia);
    fastify.delete('/media/:id', mediaController.deleteMediaById);
};

module.exports = mediaRoutes;