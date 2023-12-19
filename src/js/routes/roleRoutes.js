'use strict';

const roleController = require('../controllers/roleController');

const roleRoutes = async (fastify, options) => {
    fastify.post('/', roleController.addRole);
    fastify.put('/:id/:grantId', roleController.addGrant);
    fastify.delete('/:id', roleController.deleteRoleById);
}

module.exports = roleRoutes;