// import { useState } from 'react'
import { Session } from './Components/Session'
import { Break } from './Components/Break'
import './App.css'

function App() {

  return (
    <div className="app">
      <header>
        <h1>Time Management Project</h1>
      </header>
      <main>
        <Break></Break>
        <Session></Session>
      </main>
      <footer>
        <p>
          Created by: <a href="https://github.com/Diego17cp">Diego17</a>
        </p>
      </footer>
    </div>
  )
}

export default App
