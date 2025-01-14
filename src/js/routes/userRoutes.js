'use strict';

const userController = require('../controllers/userController');
const userLoginSchema = require('../schemas/userLoginSchema');
const userSchema = require('../schemas/userSchema')

const userRoutes = async (fastify, options) => {
    fastify.get('/all', userController.getAllUsers);
    fastify.get('/:id', userController.getUserById);
    fastify.post('/login', { schema: userLoginSchema }, userController.loginUser);
    fastify.post('/', { schema: userSchema }, userController.addUser);
    fastify.delete('/:id', userController.deleteUserById);
    fastify.put('/:id/role/:roleId', userController.updateUserRoleById);
}

module.exports = userRoutes;
