
import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export const App = () => {
  const debouncedGetMovies = useCallback(
    debounce(
      (search) => getMovies({ search }),
    500), []
  )
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  
  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
    
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='search' type="text" placeholder='Avengers, Star Wars...' value={search} />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} /> 
        }
      </main>
    </div>
  )
}

