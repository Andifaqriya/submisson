const { binaryHandler, historiesHandler } = require('../server/handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: binaryHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1048576,
            },
        },
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: historiesHandler,
    },
];

module.exports = routes;
