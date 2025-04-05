const express = require('express');
const app = express();
app.disable('x-powered-by');
const port = process.env.PORT ?? 3000;

// Forma manual
app.use((req, res, next) => {
    if (req.method !== 'POST') return next();
    if (req.headers['content-type'] !== 'application/json') return next()
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        try {
            req.body = JSON.parse(body);
            next();
        } catch (error) {
            res.status(400).json({ message: 'Invalid JSON' });
        }
    });
})
// Forma automatica con express
app.use(express.json())
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})
app.post('/pokemon', (req, res) => {
    res.status(201).json({
        message: 'Pokemon created',
        pokemon: req.body
    });
})
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})