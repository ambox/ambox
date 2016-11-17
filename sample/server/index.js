const Ambox = require('../..');

const app = new Ambox();
const { PORT = 3000, HOST = '0.0.0.0' } = process.env;

app.use('/public/', (context, next) =>
  (request, response) => {
    console.log(`request.url: ${request.url}`);
  }
);

app.use(function *() {
  this.body = 'Hello!';
});

const server = app.listen(PORT, HOST, error => {
  error && console.error(error);
  console.log(`Listening http://${HOST}:${PORT}/`);
}).on('request', function(request, response) {
  console.log(`Requesting:`, request, response);
});

console.log('toJson:', Ambox.toJSON());

module.exports = server;
