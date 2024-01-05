'use strict';

const User = require('../models/userModel');
const hash = require('../hash');

const getAllUsers = async (request, reply) => {
    const [rows, fields] = await User.getAll();
    reply.send(rows);
};

const getUserById = async (request, reply) => {
    const [rows, fields] = await User.getByField('id', request.params.id);
    reply.send(rows);
};

const loginUser = async (request, reply) => {
    const { email, password } = request.body;
    const [rows, fields] = await User.getByField('email', email);
    const user = rows[0];
    const isPasswordMatch = await hash.validatePassword(password, user.password);
    if (user && isPasswordMatch) {
        reply.send(rows);
    } else {
        throw new Error('Invalid email or password!');
    }
};

const addUser = async (request, reply) => {
    const hashedPass = await hash.hashPassword(request.body.password);
    request.body.password = hashedPass;
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
    loginUser,
    addUser,
    deleteUserById,
    updateUserRoleById,
};
