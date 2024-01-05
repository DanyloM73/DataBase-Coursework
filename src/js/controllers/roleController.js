'use strict';

const Role = require('../models/roleModel');

const addRole = async (request, reply) => {
    const [rows, fields] = await Role.add(request.body, 'name');
    reply.send({ message: 'Role added...' });
};

const addGrant = async (request, reply) => {
    const [rows, fields] = await Role.addGrant(request.params.id, request.params.grantId);
    reply.send({ message: 'Grant added to role...' });
};

const deleteRoleById = async (request, reply) => {
    const [rows, fields] = await Role.deleteById(request.params.id);
    reply.send({ message: 'Role deleted...' });
};

module.exports = { 
    addRole,
    addGrant,
    deleteRoleById,
};
