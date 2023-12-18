'use strict';

const Request = require('../models/requestModel');

const addRequest = async (req, reply) => {
    const request = new Request();
    const [rows, fields] = await request.add(req.body, 'User_id');
    reply.send({ message: 'Request added...' });
};

const getMediaById = async (req, reply) => {
    const request = new Request();
    const [rows, fields] = await request.getRequestAndMediaById(req.params.id);
    reply.send(rows);
};

const deleteRequestById = async (req, reply) => {
    const request = new Request();
    const [rows, fields] = await request.deleteById(req.params.id);
    reply.send('Request deleted...');
};

module.exports = {
    addRequest,
    getMediaById,
    deleteRequestById
}