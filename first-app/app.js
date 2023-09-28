function sayHello(name) {
  console.log('Hello ' + name);
}

// sayHello('Dimalsha');
//console.log(window); //window is a global object in browser

//global objects
// console.log(); //global object
// setTimeout(); //global object
// clearTimeout(); //global object
// setInterval(); 
// clearInterval();

//window.console.log();  //console is a property of window object

let message = '';
global.console.log(global.message); //global object, since we are in node, window object is not available


console.log(module); //module is a global object in node

//loading a module
const log = require('./logger'); //logger is a local module, we use ./ to indicate that it is in the same folder
console.log(log);
log('message'); //calling the log function in logger.js

//path module
const path = require('path');

let pathObj = path.parse(__filename);
console.log(pathObj);

//os module
const os = require('os');
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log('Total Memory: ' + totalMemory);
//Template string
//ES6 / ES2015 : ECMAScript 6
console.log(`Free Memory: ${freeMemory}`);

//file system module
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

//asynchronous version //recommended
fs.readdir('./', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

//events module
const EventEmitter = require('events'); //EventEmitter is a class //blueprint of an object
const emitter = new EventEmitter(); //emitter is an object, instance of EventEmitter class

//register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

//raise an event
//when we raise an event, we need to make sure that there is a listener
//order matters
//when we call the emit method, it will signal to all the listeners that an event has happened
emitter.emit('messageLogged', {id:1, url: 'http://'}); //emit means making a noise or producing 

//register a listener
emitter.on('logging', (arg) => {
  console.log('Listener called', arg);
});

//raise the event
emitter.emit('logging', {data: 'message'});
