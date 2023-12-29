'use strict';

const roleController = require('../controllers/roleController');
const roleSchema = require('../schemas/roleSchema');

const roleRoutes = async (fastify, options) => {
    fastify.post('/', { schema: roleSchema }, roleController.addRole);
    fastify.put('/:id/:grantId', roleController.addGrant);
    fastify.delete('/:id', roleController.deleteRoleById);
}

module.exports = roleRoutes;