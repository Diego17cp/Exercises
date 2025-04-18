import express from "express";
import { PORT, SECRET_KEY } from "./config.js";
import { UserRepository } from "./user-repository.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const token = req.cookies.access_tokeb;
    if (!token) return res.render("index");
    try {
        const data = jwt.verify(token, SECRET_KEY);
        return res.render("index", data);
    } catch (error) {
        return res.render("index");
    }
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
		res.cookie("access_tokeb", token, {
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
app.post("/logout", (req, res) => {});
app.get("/protected", (req, res) => {
    const token = req.cookies.access_tokeb;
    if (!token) return res.status(403).send("Unauthorized");
    try {
        const data = jwt.verify(token, SECRET_KEY);
        res.render("protected", data);
    } catch (error) {
        return res.status(403).send("Unauthorized");
    }
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
