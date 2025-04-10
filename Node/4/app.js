import express, { json } from 'express';
const app = express();
import { randomUUID } from 'node:crypto';
import movies from './movies.json' with { type: 'json' };
import { validateMovie, validatePartialMovie } from './schemes/movies.js';

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
app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        );
        return res.json(filteredMovies);
    }
    res.json(movies);
});

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ error: 'Movie not found' });
});

app.post('/movies', (req, res) => {
    const result = validateMovie(req.body);
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newMovie = {
        id: randomUUID(),
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year,
        director: req.body.director,
        rate: req.body.rate ?? 0,
        poster: req.body.poster
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIdx = movies.findIndex(movie => movie.id === id);
    if (movieIdx === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    movies.splice(movieIdx, 1);
    res.status(204).send();
});

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body);
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const { id } = req.params;
    const movieIdx = movies.findIndex(movie => movie.id === id);
    if (movieIdx === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    movies[movieIdx] = {
        ...movies[movieIdx],
        ...result.data
    };
    res.json(movies[movieIdx]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});