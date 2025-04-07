const z = require('zod');
const moviesScheme = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required'
    }),
    year: z.number().int().positive().min(1900).max(2025),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5).optional(),
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
const validateMovie = (object) => {
    return moviesScheme.safeParse(object)
}
module.exports = {
    validateMovie
}