import { useEffect, useState } from 'react'
import './App.css'


export const App = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition]= useState({x: 0, y: 0})
  
  // Pointer move effect
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  // change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
  }, [enabled])

  return (
    <main>
      <div className='tracker' style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        width: 40,
        height: 40,
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} pointer tracking
      </button>
    </main>
  )
}
