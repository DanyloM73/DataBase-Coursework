'use strict';

const Origin = require('../models/originModel');

const addOrigin = async (request, reply) => {
    const [rows, fields] = await Origin.add(request.body, 'name');
    reply.send({ message: 'Origin added...' });
};

const deleteOriginById = async (request, reply) => {
    const [rows, fields] = await Origin.deleteById(request.params.id);
    reply.send({ message: 'Origin deleted...' });
};

module.exports = { 
    addOrigin,
    deleteOriginById,
};
