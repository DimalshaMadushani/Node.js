

let url = 'http://mylogger.io/log';
console.log(__filename); //filename is a global object in node
console.log(__dirname); //dirname is a global object in node

function log(message) {
    //send an http request
    console.log(message);
    
}

module.exports= log; //exporting the log function