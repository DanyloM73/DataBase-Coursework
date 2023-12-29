'use strict';

module.exports = {
    body: {
        type: 'object',
        properties: {
            type: { type: 'string' },
            url: { type: 'string' },
            name: { type: 'string' },
            metadate: { type: 'string' },
            Origin_id: { type: 'number' }
        },
        required: ['type', 'url', 'name', 'metadate', 'Origin_id']
    }
}
