import React,  {useState , useContext } from 'react'
import {Moviesprovider} from './MoviesContext'

function Addmovie() {
    const[moviename ,setMoviename ] =useState('')
    const[directorname ,setDirectorname] = useState('')

    const obj=useContext(Moviesprovider)

    function add(){
        var movie={
            moviename:moviename,
            directorname:directorname,
        }
        obj.addmovie(movie)
    }
    return (
        <div >
            <h1>Add Movie</h1>
            <input  type="text" placeholder="Moviename" value={moviename} onChange={(e)=>{setMoviename(e.target.value)}}></input>
            <br/>
            <input  type="text" placeholder="Director" value={directorname} onChange={(e)=>{setDirectorname(e.target.value)}}></input>
            <br/>
            <button class="btn btn-primary" style={{margin:10}} onClick={add} >Addmovie</button>

        </div>
    )
}

export default Addmovie
