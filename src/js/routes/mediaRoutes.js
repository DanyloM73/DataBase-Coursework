'use strict';

const mediaController = require('../controllers/mediaController');

const mediaRoutes = async (fastify, options) => {
    fastify.post('/', mediaController.addMedia);
    fastify.get('/search/:keyword', mediaController.searchMedia);
    fastify.delete('/:id', mediaController.deleteMediaById);
};

module.exports = mediaRoutes;