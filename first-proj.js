var http = require('http');
var dt = require('./modules.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currentlt: '+dt.myDateTime() /n);
    res.end('Hello World\n');
}).listen(8080);