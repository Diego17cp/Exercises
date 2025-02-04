import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UserList } from './components/UserList'

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

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
      <header>
        <button onClick={toggleColors}>
          Color cells
        </button>
      </header>
      <main>
        < UserList showColors={showColors} users={users}/>
      </main>
    </>
  )
}

export default App
