import { useState } from 'react'

export const useSession = () => {

    const [counter, setCounter] = useState(25)

    const handleIncrement = () => {
        if (counter === 60) {
            return
        }
        setCounter(
            prevState => prevState + 1
        )
    }
    const handleDecrement = () => {
        if (counter === 1) {
            return
        }
        setCounter(
            prevState => prevState - 1
        )
    }

    return { counter, handleIncrement, handleDecrement }
}