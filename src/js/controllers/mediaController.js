'use strict';

const Media = require('../models/mediaModel');

const addMedia = async (request, reply) => {
    const [rows, fields] = await Media.add(request.body, 'url');
    reply.send({ message: 'Media added...' });
};

const searchMedia = async (request, reply) => {
    const [rows, fields] = await Media.search(request.params.keyword);
    reply.send(rows);
};

const deleteMediaById = async (request, reply) => {
    const [rows, fields] = await Media.deleteById(request.params.id);
    reply.send({ message: 'Media deleted...' });
};

module.exports = {
    addMedia,
    searchMedia,
    deleteMediaById,
};
