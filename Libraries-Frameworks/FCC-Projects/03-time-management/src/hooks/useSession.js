import { useEffect, useState } from 'react'

export const useSession = () => {

    const [minutesSession, setMinutesSession] = useState(25)
    const [secondsSession, setSecondsSession] = useState(0)
    const [isSession, setIsSession] = useState(true)
    const [isRunningSession, setIsRunningSession] = useState(false)


    useEffect(
        () => {
            let interval
            if (isRunningSession) {
                interval = setInterval(() => {
                    if (secondsSession === 0) {
                        if (minutesSession === 0) {
                            setIsSession(false)
                            setIsRunningSession(false)
                            // Trigger break time
                            return
                        }
                        setMinutesSession(prev => prev - 1)
                        setSecondsSession(59)
                    } else {
                        setSecondsSession(prev => prev - 1)
                    }
                }, 1000)
            }
            return () => clearInterval(interval)
        }
    , [isRunningSession, minutesSession, secondsSession])

    const handleIncrement = () => {
        if (minutesSession === 60) {
            return
        }
        setMinutesSession(
            prevState => prevState + 1
        )
    }
    const handleDecrement = () => {
        if (minutesSession === 1) {
            return
        }
        setMinutesSession(
            prevState => prevState - 1
        )
    }

    const toggleReproductionSession = () => {
        setIsRunningSession(prev => !prev)
    }

    const resetSessionTimer = () => {
        setMinutesSession(25)
        setSecondsSession(0)
    }

    return { 
        minutesSession, 
        secondsSession,
        handleIncrement, 
        handleDecrement, 
        isRunningSession,
        toggleReproductionSession,
        isSession,
        setSecondsSession,
        setMinutesSession,
        resetSessionTimer
    }
}