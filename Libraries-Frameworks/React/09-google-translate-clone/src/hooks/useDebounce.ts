import { useEffect, useState } from "react"

export const useDebounce = <T> (value: T, delay = 500) => {
    const [debouncedVal, setDebouncedVal] = useState(value)

    useEffect(
        () => {
            const timer = setTimeout(() => {
                setDebouncedVal(value)
            }, delay)

            return () => clearTimeout(timer)
        } 
    , [value, delay])
    
    return debouncedVal
}