'use strict';

module.exports = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            grants: { type: 'string' },
        },
        required: ['name', 'grants']
    }
};
