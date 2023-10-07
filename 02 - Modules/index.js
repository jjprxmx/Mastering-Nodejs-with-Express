const data = require('./data');
const os = require('os');
console.log(data)

//
const http = require('http');
http
.createServer(function (req, res) {
    res.writeHead(200);
    res.write(os.uptime().toString());
    res.end();
 })
 .listen(3000);
console.log('Listening on port 3000');