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
    addUser: (user: Omit<Usuario, 'id'>) => void;
    deleteUser: (id: id) => void;
}

export const UsuarioContext = createContext<UsuarioContextType | null>(null);

interface UsuarioProviderProps {
    children: React.ReactNode;
}

export const UsuarioProvider: React.FC<UsuarioProviderProps> = ({ children }) => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        fetch('http://localhost/backend/public/usuario')
            .then(response => response.json())
            .then(data => setUsuarios(data));
    }, []);

    const addUser = async (user: Omit<Usuario, 'id'>) => {
        try {
            const response = await fetch('http://localhost/backend/public/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(user)
            });
            
            if (!response.ok) {
                throw new Error('Error creating user');
            }
            
            const newUser = await response.json();
            setUsuarios(prev => [...prev, newUser]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const deleteUser = async (id: id) => {
        try {
            const response = await fetch(`http://localhost/backend/public/usuario/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
            });

            if (!response.ok) {
                throw new Error('Error deleting user');
            }

            setUsuarios(prev => prev.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const contextVal: UsuarioContextType = {
        usuarios,
        addUser,
        deleteUser
    }
    return (
        <UsuarioContext.Provider value={contextVal}>
            {children}
        </UsuarioContext.Provider>
    )
};