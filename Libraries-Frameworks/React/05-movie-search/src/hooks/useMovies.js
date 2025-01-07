import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'


export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if(search === previousSearch.current) return
        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }, [])

    // esto se ejecuta siempre que se vuelve a renderizar el componente, por lo tanto, si el value del input cambia el sort volverá a ejecutarse
    // const sortMovies = sort 
    //     ? [...movies].sort(
    //         (a, b) => a.title.localeCompare(b.title))
    //     : movies

    // useMemo se ejecuta solo cuando el valor de sort o movies cambia
    // memoriza el valor de sortMovies, si el valor de sort o movies no cambia, no se vuelve a ejecutar
    const sortMovies = useMemo (
        () => {
            if(!movies) return 
            return sort 
            ? [...movies].sort(
                (a, b) => a.title.localeCompare(b.title))
            : movies
        }, [sort, movies])
    return { movies: sortMovies, getMovies, loading }
}