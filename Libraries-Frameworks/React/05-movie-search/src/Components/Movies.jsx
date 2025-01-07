// import PropTypes from 'prop-types';

export const ListOfMovies = ({ movies }) => {
    return (
		<ul className='movies'>
			{
				movies.map( movie => (
                	<li key={movie.id} className='movie'>
						<h2>{movie.title}</h2>
						<p>{movie.year}</p>
						<img src={movie.poster} alt={movie.title} />
					</li>
				))
			}
		</ul>
	);
};

export const NoMoviesResuts = () => <p>No movies found</p>;

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0
    return (
            hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResuts />
    )
} 

// ListOfMovies.propTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//             year: PropTypes.string.isRequired,
//             poster: PropTypes.string.isRequired
//         })
//     ).isRequired
// }

// Movies.propTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//             year: PropTypes.string.isRequired,
//             poster: PropTypes.string.isRequired
//         })
//     ).isRequired
// }