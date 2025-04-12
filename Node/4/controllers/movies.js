import { MovieModel } from "../models/movie";
import { validateMovie, validatePartialMovie } from "../schemes/movies";

export class MovieController {
    static getAll = async ({ req, res }) => {
        const { genre } = req.query;
        const movies = await MovieModel.getAll({ genre });
        res.json(movies);
    }
    static getById = async ({ req, res }) => {
        const { id } = req.params;
        try {
            const movie = await MovieModel.getById({ id });
            res.json(movie);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    static create = async ({ req, res }) => {
        const result = validateMovie(req.body);
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
        const newMovie = await MovieModel.create({ input: result.data });
        res.status(201).json(newMovie);
    }
    static delete = async ({ req, res }) => {
        const { id } = req.params;
        const result = await MovieModel.delete({ id });
        if (!result) return res.status(404).json({ message: 'Movie not found' });
        return res.json({ message: 'Movie deleted' });
    }
    static update = async ({ req, res }) => {
        const { id } = req.params;
        const result = validatePartialMovie(req.body);
        if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
        const updatedMovie = await MovieModel.update({ id, input: result.data });
        if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
        return res.json(updatedMovie);
    }
}