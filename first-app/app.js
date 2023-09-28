
//events module
const EventEmitter = require('events'); //EventEmitter is a class //blueprint of an object


const Logger = require('./logger');
const logger = new Logger();

//register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');