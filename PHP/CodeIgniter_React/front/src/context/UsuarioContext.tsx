import { createContext, useState, useEffect } from "react";

type id = string;
interface Usuario {
	id: id;
	nombre: string;
	email: string;
	edad: number;
}

interface UsuarioContextType {
	usuarios: Usuario[];
	addUser: (user: Omit<Usuario, "id">) => void;
	deleteUser: (id: id) => void;
}

export const UsuarioContext = createContext<UsuarioContextType | null>(null);

interface UsuarioProviderProps {
	children: React.ReactNode;
}

const baseUrl = "http://localhost/backend/public/api/usuario";

export const UsuarioProvider: React.FC<UsuarioProviderProps> = ({
	children,
}) => {
	const [usuarios, setUsuarios] = useState<Usuario[]>([]);

	useEffect(() => {
		fetch(baseUrl, {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => setUsuarios(data));
	}, []);

	const addUser = async (user: Omit<Usuario, "id">) => {
		try {
			const response = await fetch(baseUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(user),
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || "Error creating user");
			}
			if (data.data) {
				setUsuarios((prev) => [...prev, data.data]);
				return data.data;
			}
		} catch (error: unknown) {
			console.error("Error creating user:", error);
			throw error;
		}
	};

	const deleteUser = async (id: id) => {
		try {
			const response = await fetch(`${baseUrl}/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Error deleting user");
			}

			setUsuarios((prev) => prev.filter((user) => user.id !== id));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const contextVal: UsuarioContextType = {
		usuarios,
		addUser,
		deleteUser,
	};
	return (
		<UsuarioContext.Provider value={contextVal}>
			{children}
		</UsuarioContext.Provider>
	);
};
