import { useEffect, useState } from 'react'
import { NAVIGATION_EVENTS } from './constants/consts'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'





function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(NAVIGATION_EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(NAVIGATION_EVENTS.POPSTATE, onLocationChange)
    }   
  }, [])

  return (
    <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
