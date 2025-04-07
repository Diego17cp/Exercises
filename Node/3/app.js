const express = require('express');
const app = express();
const crypto = require('node:crypto');
const movies  = require('./movies.json');
const { validateMovie, validatePartialMovie } = require('./schemes/movies');
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
    const result = validateMovie(req.body);
    if (result.error) {
        return res.status(400).json({error: JSON.parse(result.error.message)});
    }
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
app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body)
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (!movie) {
        return res.status(400).json({ message: 'Movie not found' })
    }
    const updateMovie = {
        ...movies[movie],
        ...result.data
    }

})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})