'use strict';

module.exports = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            login: { type: 'string' },
            password: { type: 'string' },
            email: { type: 'string' },
            Role_id: { type: 'number' }
        },
        required: ['name', 'login', 'password', 'email', 'Role_id']
    }
}
