'use strict';

const Role = require('../models/roleModel');

const addRole = async (request, reply) => {
    const role = new Role();
    const [rows, fields] = await role.add(request.body, 'name');
    reply.send('Role added...');
};

const addGrant = async (request, reply) => {
    const role = new Role();
    const [rows, fields] = await role.addGrant(request.params.id, request.params.grantId);
    reply.send('Grant added to role...');
};

const deleteRoleById = async (request, reply) => {
    const role = new Role();
    const [rows, fields] = await role.deleteById(request.params.id);
    reply.send('Role deleted...');
};

module.exports = { 
    addRole,
    addGrant,
    deleteRoleById
};