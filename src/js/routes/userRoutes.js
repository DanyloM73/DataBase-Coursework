'use strict';

const userController = require('../controllers/userController');

const userRoutes = async (fastify, options) => {
    fastify.get('/all', userController.getAllUsers);
    fastify.get('/:id', userController.getUserById);
    fastify.post('/', userController.addUser);
    fastify.delete('/:id', userController.deleteUserById);
    fastify.put('/:id/role/:roleId', userController.updateUserRoleById);
}

module.exports = userRoutes;