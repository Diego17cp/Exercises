import { useState, useContext } from "react";
import { UsuarioContext } from "./context/UsuarioContext";
import "./App.css";

function App() {
	const context = useContext(UsuarioContext);
	const { usuarios, addUser, deleteUser } = context || {};
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [edad, setEdad] = useState(0);
	const [error, setError] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		// Validaciones
		if (!nombre.trim() || !email.trim() || !edad) {
			setError("Todos los campos son requeridos");
			return;
		}

		if (edad < 0 || edad > 120) {
			setError("La edad debe estar entre 0 y 120 años");
			return;
		}

		if (addUser) {
      addUser({
        nombre: nombre,
        email: email,
        edad: edad,
      });
      setNombre("");
      setEmail("");
      setEdad(0);
    }
	};

	return (
		<main>
			<h1>Usuarios</h1>
			{error && (
				<div style={{ color: "red", marginBottom: "1rem" }}>
					{error}
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						placeholder="Nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						required
						minLength={2}
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<input
						type="number"
						placeholder="Edad"
						value={edad || ""}
						onChange={(e) => setEdad(parseInt(e.target.value) || 0)}
						required
						min="0"
						max="120"
					/>
				</div>
				<button type="submit">Agregar</button>
			</form>
			<ul>
				{usuarios?.map((user) => (
					<li key={user.id}>
						<p>Nombre: {user.nombre}</p>
						<p>Email: {user.email}</p>
						<p>Edad: {user.edad}</p>
						<button
							onClick={() => deleteUser && deleteUser(user.id)}
							style={{ backgroundColor: "#ff4444" }}
						>
							Eliminar
						</button>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
