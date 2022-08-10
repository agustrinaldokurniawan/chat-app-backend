const server = require('./app');
const config = require('./config');

server.listen(config.port, () => {
  console.log('Server  is running on port ' + config.port);
});

require('./socket');
