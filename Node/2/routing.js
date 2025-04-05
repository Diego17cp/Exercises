const http = require('node:http');

const processRequest = (req, res) => {
    const { methiod, url } = req;
    switch (method) {
        case 'GET':
            switch (url) {
                case '/':
                    res.statusCode = 200;
                    res.end('Welcome to the home page!');
                    break;
                case '/about':
                    res.statusCode = 200;
                    res.end('This is the about page!');
                    break;
                default:
                    res.statusCode = 404;
                    res.end('404 Not Found');
            }
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            break;
        case 'POST':
            switch (url) {
                case '/pokemon': {
                    let body = ''
                    req.on('data', chunk => {
                        body += chunk.toString(); // convert Buffer to string
                    })
                    req.on('end', () => {
                        const data = JSON.parse(body);
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify({ message: 'Pokemon created', data }));
                    })
                }
                default:
                    res.statusCode = 404;
                    res.end('404 Not Found');
            }
        default:
            res.statusCode = 405;
            res.end('Method Not Allowed');
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})