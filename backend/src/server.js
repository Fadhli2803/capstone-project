const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Path = require('path');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Register Inert untuk file statis
  await server.register(Inert);

  // Sajikan file statis dari folder public
  server.route({
    method: 'GET',
    path: '/image/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'public/image'),
        listing: false,
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
