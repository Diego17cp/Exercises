const http = require("node:http");
const pc = require("picocolors");

const server = http.createServer(
    (req, res) => {
        console.log('Request received');
        res.end('Hello World!');
    }   
)
server.listen(0, () => {
    console.log(`Server listening on port ${pc.blueBright(`http://localhost:${server.address().port}`)}` );
});