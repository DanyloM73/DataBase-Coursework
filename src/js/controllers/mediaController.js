'use strict';

const Media = require('../models/mediaModel');

const addMedia = async (request, reply) => {
    const media = new Media();
    const [rows, fields] = await media.add(request.body, 'url');
    reply.send({ message: 'Media added...' });
};

const searchMedia = async (request, reply) => {
    const media = new Media();
    const [rows, fields] = await media.search(request.params.keyword);
    reply.send(rows);
};

const deleteMediaById = async (request, reply) => {
    const media = new Media();
    const [rows, fields] = await media.deleteById(request.params.id);
    reply.send('Media deleted...');
};

module.exports = {
    addMedia,
    searchMedia,
    deleteMediaById
};