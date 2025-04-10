import express, { json } from 'express';
const app = express();
import { moviesRouter } from './routes/movies.js';


app.disable('x-powered-by');

// Middleware para manejar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

app.use(json());

// Rutas existentes...
app.get('/movies', (req, res) => {a});

app.get('/movies/:id', (req, res) => {
    a
});

app.post('/movies', (req, res) => {
    a
});

app.delete('/movies/:id', (req, res) => {
    a;
});

app.patch('/movies/:id', (req, res) => {
    a
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});