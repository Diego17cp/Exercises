import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const port = process.env.PORT ?? 3000;

const initDB = async () => {
	return open({
		filename: "./db/chat.db",
		driver: sqlite3.Database,
	}).then(async (db) => {
		await db.exec(`
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                user TEXT DEFAULT 'Anonymous'
            );
        `);
		return db;
	});
};

const dbPromise = initDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
	connectionStateRecovery: {},
});

io.on("connection", async (socket) => {
	const db = await dbPromise;
	console.log("A user connected");
	socket.on("disconnect", () => {
		console.log("A user disconnected");
	});
	socket.on("chat message", async (msg) => {
		try {
			const user = socket.handshake.auth.username ?? "Anonymous";
			const result = await db.run(
				`INSERT INTO messages (content, user) VALUES (?, ?)`,
				[msg, user]
			);
			io.emit("chat message", msg, result.lastID.toString(), user);
		} catch (error) {
			console.error("Error inserting message:", error);
			return;
		}
	});
	if (!socket.recovered) {
		try {
			const results = await db.all(
				`SELECT * FROM messages WHERE id > (?)`,
				[socket.handshake.auth.serverOffset ?? 0]
			);
			results.forEach((row) => {
				socket.emit(
					"chat message",
					row.content,
					row.id.toString(),
					row.user
				);
			});
		} catch (error) {
			console.error("Error retrieving messages:", error);
			return;
		}
	}
});

app.use(logger("dev"));

app.get("/", (req, res) => {
	res.sendFile(process.cwd() + "/client/index.html");
});

server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
