import React, { useState } from 'react'


const mockToDos = [
  {
    id: '1',
    title: 'Learn React',
    completed: false,
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false,
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: false,
  }
]

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockToDos)
  
  return (
    <>
      <h1>ToDo MVC</h1>
    </>
  )
}

export default App
