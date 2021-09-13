import React from 'react';

// function Functionalcomponents(){
const Functionalcomponents = (props) =>{
    return(
    <div>
        <h1>This is Functional Component</h1>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>

    </div>
    )

}
export default Functionalcomponents;

