'use strict';

module.exports = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            location: { type: 'string' },
            rating: { type: 'number' }
        },
        required: ['name', 'location', 'rating']
    }
};
