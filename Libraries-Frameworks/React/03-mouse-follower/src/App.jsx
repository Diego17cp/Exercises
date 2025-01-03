import { useEffect, useState } from 'react'
import { Pointer } from './Components/Pointer.jsx'
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
    document.querySelector(".tracker").classList.toggle('no-cursor', !enabled)
  }, [enabled])

  return (
    <main>
      <Pointer positionX={position.x} positionY={position.y} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} pointer tracking
      </button>
    </main>
  )
}
