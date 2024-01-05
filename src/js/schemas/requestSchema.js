'use strict';

module.exports = {
    body: {
        type: 'object',
        properties: {
            description: { type: 'string' },
            Media_id: { type: 'number' },
            User_id: { type: 'number' }
        },
        required: ['description', 'Media_id', 'User_id']
    }
};
