'use strict';

const roleController = require('../controllers/roleController');

const roleRoutes = async (fastify, options) => {
    fastify.post('/role', roleController.addRole);
    fastify.put('/role/:id/:grantId', roleController.addGrant);
    fastify.delete('/role/:id', roleController.deleteRoleById);
}

module.exports = roleRoutes;