const express = require('express');
const app = express();
const z = require('zod');
const crypto = require('node:crypto');
const movies  = require('./movies.json');
app.disable('x-powered-by');

app.use(express.json());
app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies);
    }
    res.json(movies);
})
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ error: 'Movie not found' });
})
app.post('/movies', (req, res) => {
    const moviesScheme = z.object({
        title: z.string({
            invalid_type_error: 'Movie title must be a string',
            required_error: 'Movie title is required'
        }),
        year: z.number().int().positive().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        rate: z.number().min(0).max(10).optional(),
        poster: z.string().url({
            message: 'Poster must be a valid URL'
        }),
        genre: z.array(z.enum([
            'Action',
            'Drama',
            'Comedy',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Romance',
            'Thriller',
            'Documentary'
        ]), {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movi e genre must be an array of enum Genre'
        })
    })
    const { title, genre, year, director, rate, poster } = req.body;
    const newMovie = {
        id: crypto.randomUUID(),
        title,
        genre,
        year,
        director,
        rate: rate ?? 0,
        poster
    }
    movies.push(newMovie);
    res.status(201).json(newMovie);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})