'use strict';

const userController = require('../controllers/userController');

const userRoutes = async (fastify, options) => {
    fastify.get('/users', userController.getAllUsers);
    fastify.get('/user/:id', userController.getUserById);
    fastify.post('/user', userController.addUser);
    fastify.delete('/user/:id', userController.deleteUserById);
    fastify.put('/user/:id/role/:roleId', userController.updateUserRoleById);
}

module.exports = userRoutes;