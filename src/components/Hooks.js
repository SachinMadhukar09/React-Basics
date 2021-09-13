import React,{useState} from 'react'

const Hooks=()=>{

    const [count, setCount] = useState(10)

    return(
        <div>
            <h1>Managing State with Hooks</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(4930)}>Up</button>

        </div>
    )

}
export default Hooks;