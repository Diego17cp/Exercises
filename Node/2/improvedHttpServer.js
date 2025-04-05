const http = require('node:http');
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Welcome to the home page!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the about page!');
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
}

const server = http.createServer(processRequest);
server.listen(desiredPort, () => {
    console.log(`Server running at http://localhost:${desiredPort}/`);
});