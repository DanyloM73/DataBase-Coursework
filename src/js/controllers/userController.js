'use strict';

const User = require('../models/userModel');

const getAllUsers = async (request, reply) => {
    const user = new User();
    const [rows, fields] = await user.getAll();
    reply.send(rows);
};

const getUserById = async (request, reply) => {
    const user = new User();
    const [rows, fields] = await user.getByField('id', request.params.id);
    reply.send(rows);
};

const addUser = async (request, reply) => {
    const user = new User();
    const [rows, fields] = await user.add(request.body, 'email');
    reply.send('User added...');
};

const deleteUserById = async (request, reply) => {
    const user = new User();
    const [rows, fields] = await user.deleteById(request.params.id);
    reply.send('User deleted...');
};

const updateUserRoleById = async (request, reply) => {
    const user = new User();
    const [rows, fields] = await User.updateRoleById(request.params.id, request.params.roleId);
    reply.send('User role updated...');
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserRoleById
};