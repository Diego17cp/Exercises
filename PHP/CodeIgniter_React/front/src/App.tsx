import { useState, useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext'
import './App.css'



function App() {
  const context = useContext(UsuarioContext);
  const { usuarios, addUser, deleteUser } = context || {};
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addUser) {
      addUser({ nombre, email, edad });
    }
  }

  return (
    <main>
      <h1>Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="number" placeholder="Edad" value={edad} onChange={e => setEdad(parseInt(e.target.value))} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {usuarios?.map(user => (
          <li key={user.id}>
            <p>{user.nombre}</p>
            <p>{user.email}</p>
            <p>{user.edad}</p>
            <button onClick={() => deleteUser && deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
