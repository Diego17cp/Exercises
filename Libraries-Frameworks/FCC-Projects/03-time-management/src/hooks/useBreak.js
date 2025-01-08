
import { useEffect, useState } from 'react'

export const useBreak = () => {

    const [minutesBreak, setMinutesBreak] = useState(5)
    const [secondsBreak, setSecondsBreak] = useState(0)
    const [isBreak, setIsBreak] = useState(false)
    const [isRunningBreak, setIsRunningBreak] = useState(false)

    useEffect(
            () => {
                let interval
                if (isRunningBreak) {
                    interval = setInterval(() => {
                        if (secondsBreak === 0) {
                            if (minutesBreak === 0) {
                                setIsBreak(false)
                                setIsRunningBreak(false)
                                // Trigger break time
                                return
                            }
                            setMinutesBreak(prev => prev - 1)
                            setSecondsBreak(59)
                        } else {
                            setSecondsBreak(prev => prev - 1)
                        }
                    }, 1000)
                }
                return () => clearInterval(interval)
            }
        , [isRunningBreak, minutesBreak, secondsBreak])

    const handleIncrement = () => {
        if (minutesBreak === 60) {
            return
        }
        setMinutesBreak(
            prevState => prevState + 1
        )
    }
    const handleDecrement = () => {
        if (minutesBreak === 1) {
            return
        }
        setMinutesBreak(
            prevState => prevState - 1
        )
    }

    const toggleReproductionBreak = () => {
        setIsRunningBreak(prevState => !prevState)
    }

    const resetBreakTimer = () => {
        setMinutesBreak(5)
        setSecondsBreak(0)
    }

    return { minutesBreak, secondsBreak, handleIncrement, handleDecrement, isBreak, isRunningBreak, toggleReproductionBreak, resetBreakTimer }
}

// TODO: 
// 1. Cuando el componente esta corriendo y se actualiza el tiempo, no se debe parar ni reiniciar el tiempo
// 2. cuando el componente esta en pausa si se puede actualizar el tiempo
// 3. cuando se reinicia el tiempo, se debe parar el contador
// 4. cuando se acaba el tiempo se debe intercambiar entre el tiempo de sesion y el tiempo de descanso
// 5. cuando se acaba el tiempo del break se debe volver al tiempo de sesion con el value seleccionado
// 6. cuando el tiempo sea 1 minuto se debe dar un estilo especial
// 7. cuando el tiempo se acabe en cualquier modo se debe reproducir un sonido