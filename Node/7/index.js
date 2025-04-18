import express from "express";
import { PORT } from "./config.js";
import { UserRepository } from "./user-repository.js";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.post('/login', (req, res) => {
    const { username, password } = req.body
    try {
        const user = UserRepository.login({ username, password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    try {
        const id = await UserRepository.create({ username, password })
        res.status(201).json({ id })
    } catch (error) {
        res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {})
app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})