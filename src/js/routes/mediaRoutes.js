'use strict';

const mediaController = require('../controllers/mediaController');
const mediaSchema = require('../schemas/mediaSchema');

const mediaRoutes = async (fastify, options) => {
    fastify.post('/', { schema: mediaSchema }, mediaController.addMedia);
    fastify.get('/search/:keyword', mediaController.searchMedia);
    fastify.delete('/:id', mediaController.deleteMediaById);
};

module.exports = mediaRoutes;
