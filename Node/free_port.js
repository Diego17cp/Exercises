const net = require("node:net");
const pc = require("picocolors");

const findAvailablePort = (desiredPort) => {
	return new Promise((resolve, reject) => {
		const server = net.createServer();
		server.listen(desiredPort, () => {
			const { port } = server.address().port;
			server.close(() => {
				resolve(port);
			});
		});

		server.on("error", (error) => {
			if (error.code === "EADDRINUSE") {
				resolve(findAvailablePort(0).then((port) => resolve(port)));
			}
            else {
                reject(error);
            }
		});
	});
};
