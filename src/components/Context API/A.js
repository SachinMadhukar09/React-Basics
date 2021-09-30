import React ,{useContext} from 'react'
import {Moviesprovider} from "./Moviescontext"

function A() {

    const obj=useContext(Moviesprovider)
    function change(){
        obj.changemovie()
    }
    return (
        <div style={{backgroundColor: 'pink' , margin:10}}>
            <h1>This is A Component</h1>
            <h1>The director name is {obj.director}</h1>
            <button className="btn btn-success" style={{margin:10}} onClick={change}>Change Movie Name</button>
        </div>
    )
}

export default A
