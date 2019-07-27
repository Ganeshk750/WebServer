const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/Plain' });
    res.end('Hello User Wel Come To Node Server!!!');
}).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});