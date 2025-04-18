import express from "express";
import { PORT, SECRET_KEY } from "./config.js";
import { UserRepository } from "./user-repository.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
	const token = req.cookies.access_token;
	req.session = {
		user: null,
	};
	try {
		const data = jwt.verify(token, SECRET_KEY);
		req.session.user = data;
	} catch {}
	next();
});

// Set view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
	const { user } = req.session;
	res.render("index", { user });
});
app.post("/login", async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await UserRepository.login({ username, password });
		const token = jwt.sign(
			{ id: user._id, username: user.username },
			SECRET_KEY,
			{
				expiresIn: "1h",
			}
		);
		res.cookie("access_token", token, {
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 1000, // 1 hour
		}).send({ username: user.username });
	} catch (error) {
		res.status(400).send(error.message);
	}
});
app.post("/register", async (req, res) => {
	const { username, password } = req.body;
	try {
		const id = await UserRepository.create({ username, password });
		res.status(201).json({ id });
	} catch (error) {
		res.status(400).send(error.message);
	}
});
app.post("/logout", (req, res) => {
	res.clearCookie("access_token").json({ message: "Logged out" });
});
app.get("/protected", (req, res) => {
	const { user } = req.session;
	if (!user) return res.status(401).send("Unauthorized");
	res.render("protected", { user });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
