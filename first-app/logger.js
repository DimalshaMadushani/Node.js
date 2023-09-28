
const EventEmitter = require('events'); //EventEmitter is a class //blueprint of an object


let url = 'http://mylogger.io/log';

//logger class has the ability to raise an event by extending EventEmitter class
class Logger extends EventEmitter {
    log(message) {
        //send an http request
        console.log(message);
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); //making a noise, produce - signalling that an event has happened
    }
}



module.exports= Logger; //exporting the log function