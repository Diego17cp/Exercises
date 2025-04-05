const express = require('express');
const app = express();
app.disable('x-powered-by');
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})
app.post('/pokemon', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        res.json({ message: 'Pokemon received!', data });
    });
})
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})