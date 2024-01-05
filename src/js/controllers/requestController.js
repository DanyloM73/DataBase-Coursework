'use strict';

const Request = require('../models/requestModel');

const addRequest = async (req, reply) => {
    const [rows, fields] = await Request.add(req.body, 'User_id');
    reply.send({ message: 'Request added...' });
};

const getMediaByRequestId = async (req, reply) => {
    const [rows, fields] = await Request.getRequestAndMediaById(req.params.id);
    reply.send(rows);
};

const deleteRequestById = async (req, reply) => {
    const [rows, fields] = await Request.deleteById(req.params.id);
    reply.send({ message: 'Request deleted...' });
};

module.exports = {
    addRequest,
    getMediaByRequestId,
    deleteRequestById,
};
