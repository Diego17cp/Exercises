const http = require("node:http");
const pc = require("picocolors");
const findAvailablePort = require("./free_port");

const server = http.createServer(
    (req, res) => {
        console.log('Request received');
        res.end('Hello World!');
    }   
)
findAvailablePort(3000).then((port) => {
    server.listen(port, () => {
        console.log(`Server listening on port ${pc.blueBright(`http://localhost:${port}`)}`);
    });
});
