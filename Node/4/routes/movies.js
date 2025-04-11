import { Router } from "express";
import movies from '../movies.json' with { type: 'json' };
import { randomUUID } from 'node:crypto';
import { validateMovie, validatePartialMovie } from '../schemes/movies.js';

export const moviesRouter = Router();

moviesRouter.get("/", (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        );
        return res.json(filteredMovies);
    }
    res.json(movies);
})
moviesRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ error: 'Movie not found' });
})
moviesRouter.post("/", (req, res) => {
    const result = validateMovie(req.body);
    if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
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
})
moviesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const movieIdx = movies.findIndex(movie => movie.id === id);
    if (movieIdx === -1) return res.status(404).json({ message: 'Movie not found' });
    movies.splice(movieIdx, 1);
    res.status(204).send();
})
moviesRouter.patch("/:id", (req, res) => {
    const result = validatePartialMovie(req.body);
    if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) });
    const { id } = req.params;
    const movieIdx = movies.findIndex(movie => movie.id === id);
    if (movieIdx === -1) return res.status(404).json({ message: 'Movie not found' });
    movies[movieIdx] = {
        ...movies[movieIdx],
        ...result.data
    };
    res.json(movies[movieIdx]);
})