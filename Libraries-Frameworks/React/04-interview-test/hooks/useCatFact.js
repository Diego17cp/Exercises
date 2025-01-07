import { useState, useEffect } from 'react'
import { getRandomFact } from '../Logic/facts'


export const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    // Effect to fetch the image when the page loads
    useEffect(refreshFact,[])

    return {fact, refreshFact}
}