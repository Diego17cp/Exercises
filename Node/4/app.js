import express, { json } from 'express';
const app = express();
import { moviesRouter } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';


app.disable('x-powered-by');

// Middleware para manejar CORS
app.use((req, res, next) => {
    corsMiddleware(req, res, next);
});

app.use(json());

// Rutas existentes...
app.use('/movies', moviesRouter);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});