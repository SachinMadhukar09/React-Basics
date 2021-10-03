import React , {useContext} from 'react'
import {Moviesprovider} from './MoviesContext'

function Navbar() {

    const obj=useContext(Moviesprovider)
    return (
        <div>
            <div>
                <h1>The Total Movies Count : {obj.movies.length}</h1>
                </div>
        </div>
    )
}

export default Navbar
