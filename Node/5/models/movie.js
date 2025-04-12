import { randomUUID } from 'node:crypto'
import movies from '../movies.json' with { type: 'json' }

export class MovieModel {
    static getAll = async ({ genre }) => {
        if (genre) {
            return movies.filter(
                movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
            )
        }
        return movies
    }
    static getById = async ({ id }) => {
        const movie = movies.find(movie => movie.id === id)
        if (!movie) throw new Error('Movie not found')
        return movie
    }
    static create = async (input) => {
        const newMovie = {
            id: randomUUID(),
            ...input
        };
        movies.push(newMovie);
        return newMovie
    }
    static async delete({ id }) {
        const movieIdx = movies.findIndex(movie => movie.id === id)
        if (movieIdx === -1) return false
        movies.splice(movieIdx, 1)
        return true
    }
    static async update({ id, input }) {
        const movieIdx = movies.findIndex(movie => movie.id === id)
        if (movieIdx === -1) return false
        movies[movieIdx] = {
            ...movies[movieIdx],
            ...input
        }
        return movies[movieIdx]
    }
}