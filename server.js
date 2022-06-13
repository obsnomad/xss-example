const http = require('http');

const requestListener = function (req, res) {
    const match = req.headers.cookie.match(/dangerousToken=([^;]*)/);
    if (match) {
        console.log(`Received token: ${match[1]}`);
    }
    res.writeHead(200);
    res.end();
}

const server = http.createServer(requestListener);
server.listen(8000);
