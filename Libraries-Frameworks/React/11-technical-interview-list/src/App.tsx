import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'

function App() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(
    () => {
      fetch('https://randomuser.me/api?results=100')
        .then((async response => await response.json()))
        .then((data) => setUsers(data.results))
        .catch((error) => console.error(error))
    }
    ,[])

  return (
    <>
      <h1>Hola ts</h1>
      
    </>
  )
}

export default App
