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
	static getById = async ({ id }) => {};
	static create = async ({ input }) => {};
	static update = async ({ id, input }) => {};
	static delete = async ({ id }) => {};
}
