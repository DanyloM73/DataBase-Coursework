'use strict';

const fastify = require('fastify')({ logger: true });
const mediaRoutes = require('./routes/mediaRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const originRoutes = require('./routes/originRoutes');
const requestRoutes = require('./routes/requestRoutes');

fastify.addHook('onError', (request, reply, error, done) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal server error';
    reply.code(statusCode).send({ error: message });
    done();
});

fastify.register(mediaRoutes, { prefix: '/media' });
fastify.register(userRoutes, { prefix: '/user' });
fastify.register(roleRoutes, { prefix: '/role' });
fastify.register(originRoutes, { prefix: '/origin' });
fastify.register(requestRoutes, { prefix: '/request' });

const startServer = async () => {
    try {
        await fastify.listen({ port: 3001 })
        console.log(`Server is running on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();