'use strict';

const User = require('../models/userModel');

const getAllUsers = async (request, reply) => {
    const [rows, fields] = await User.getAll();
    reply.send(rows);
};

const getUserById = async (request, reply) => {
    const [rows, fields] = await User.getByField('id', request.params.id);
    reply.send(rows);
};

const addUser = async (request, reply) => {
    const [rows, fields] = await User.add(request.body, 'email');
    reply.send({ message: 'User added...' });
};

const deleteUserById = async (request, reply) => {
    const [rows, fields] = await User.deleteById(request.params.id);
    reply.send({ message: 'User deleted...' });
};

const updateUserRoleById = async (request, reply) => {
    const [rows, fields] = await User.updateRoleById(request.params.id, request.params.roleId);
    reply.send({ message: 'User role updated...' });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserRoleById
};