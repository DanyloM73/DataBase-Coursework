'use strict';

const Origin = require('../models/originModel');

const addOrigin = async (request, reply) => {
    const origin = new Origin();
    const [rows, fields] = await origin.add(request.body);
    reply.send('Origin added...');
};

const deleteOriginById = async (request, reply) => {
    const origin = new Origin();
    const [rows, fields] = await origin.deleteById(request.params.id);
    reply.send('Origin deleted...');
};

module.exports = { 
    addOrigin,
    deleteOriginById
};