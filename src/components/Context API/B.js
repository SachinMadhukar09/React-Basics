import React , {useContext} from 'react'
import {Moviesprovider} from './Moviescontext'

function B() {
    const obj=useContext(Moviesprovider)
    function change(){
        obj.changedirector()
    }
    return (
        <div style={{backgroundColor: 'grey' , margin:10}}>
            <h1>This is B Component</h1>
            <h1>The movie name is {obj.movie}</h1>
            <button className="btn btn-primary" style={{margin:10}} onClick={change}>Change director Name</button>
 
        </div>
    )
}

export default B
