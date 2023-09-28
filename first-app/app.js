EventEmitter = require('events'); //EventEmitter is a class //blueprint of an object
const emitter = new EventEmitter(); //emitter is an object, instance of EventEmitter class

//register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

const Logger = require('./logger');
Logger('message');

//http module
const http = require('http');
// we don't use the http module directly, we use the express framework
//because this module is low level, we have to do a lot of work to build a web server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
}); //server is an EventEmitter

//register a listener
server.on('connection', (socket) => {
  console.log('New connection...');
});

server.listen(3000);
console.log('Listening on port 3000...');