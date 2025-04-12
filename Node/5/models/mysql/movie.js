import mysql from "mysql2/promise";
const config = {
	host: "localhost",
	user: "root",
	port: 3306,
	password: "",
	database: "movies",
};
const connection = await mysql.createConnection(config);
export class MovieModel {
	static getAll = async ({ genre }) => {
		if (genre) {
			const formattedGenre = genre.toLowerCase();
			const [genres] = await connection.query(
				"SELECT id, name FROM genre WHERE LOWER(name) = ?;",
				[formattedGenre]
			);
			if (genres.length === 0) {
				console.log("⚠️ No se encontró el género:", formattedGenre);
				return [];
			}

			const [{ id }] = genres;
			const [movies] = await connection.query(
				"SELECT m.* FROM movie m JOIN movie_genres mg ON mg.movie_id = m.id WHERE mg.genre_id = ?;",
				[id]
			);
			return movies;
		}
		const [movies] = await connection.query("SELECT * FROM movie");
		return movies;
	};
	static getById = async ({ id }) => {
		const [movies] = await connection.query(
			"SELECT * FROM movie WHERE id = ?",
			[id]
		);
		if (movies.length === 0) null;
		return movies[0];
	};
	static create = async ({ input }) => {
        const [uuidResult] = await connection.query(
            "SELECT UUID() uuid;"
        );
        const [{ uuid }] = uuidResult;
		const { title, year, director, duration, rate, poster, genre : genreInput } = input;
        const [genres] = await connection.query("SELECT id FROM genre WHERE name = ?;", [genreInput]);
        if (genres.length === 0) {
            console.log("⚠️ No se encontró el género:", genreInput);
            return null;
        }
        const [{ id }] = genres;
        try {
            const [result] = await connection.query(
                "INSERT INTO movie (id, title, year, director, duration, rate, poster) VALUES (?, ?, ?, ?, ?, ?);",
                [uuid, title, year, director, duration, rate, poster]
            );
            const movieId = result.insertId;
            await connection.query(
                "INSERT INTO movie_genres (movie_id, genre_id) VALUES (?, ?);",
                [movieId, id]
            );
        } catch (error) {
            console.error("⚠️ Error al insertar la película:", error);
            return null;
        }
        const [movie] = await connection.query(
            "SELECT * FROM movie WHERE id = ?",
            [uuid]
        );
        return movie[0];
	};
	static update = async ({ id, input }) => {
        const { title, year, director, duration, rate, poster } = input;
        const [result] = await connection.query(`
            UPDATE movie SET title = ?, year = ?, director = ?, duration = ?, rate = ?, poster = ? WHERE id = ?;
        `, [title, year, director, duration, rate, poster, id]);
        if (result.affectedRows === 0) {
            console.log("⚠️ No se encontró la película con id:", id);
            return null;
        }
        return {
            message: "Película actualizada",
        }
    };
	static delete = async ({ id }) => {
        const [result] = await connection.query(`
            DELETE FROM movie WHERE id = ?;
        `, [id]);
        if (result.affectedRows === 0) {
            console.log("⚠️ No se encontró la película con id:", id);
            return null;
        }
        return {
            message: "Película eliminada",
        }
    };
}
