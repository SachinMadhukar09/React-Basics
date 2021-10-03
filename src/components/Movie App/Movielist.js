import React ,{useContext} from 'react'
import {Moviesprovider} from './MoviesContext'

function Movielist() {
    const obj=useContext(Moviesprovider)
    const movieslist = obj.movies.map((movie) => {
        return <div>
            <h1>{movie.moviename}</h1>
            <p>Directed by {movie.directorname}</p>
        </div>
    })
    return (
        <div>
            <h1>Movies list</h1>
            {movieslist}
        </div>
    )
}

export default Movielist
