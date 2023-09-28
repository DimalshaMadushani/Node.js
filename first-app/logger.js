
const EventEmitter = require('events'); //EventEmitter is a class //blueprint of an object
const emitter = new EventEmitter(); //emitter is an object, instance of EventEmitter class

let url = 'http://mylogger.io/log';

function log(message) {
    //send an http request
    console.log(message);
    emitter.emit('logging', {data: 'message'});

}

module.exports= log; //exporting the log function
