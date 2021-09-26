import React ,{useState} from 'react'

function Map() {

    const [number,setNumber] =useState([1,2,3,4,5,6,7,8,9,10])
    const [names,setNames] = useState(["Sachin","Raj","Bunny","Kabir"])

    const numberList = number.map((number) =>{
        return <h1>{number}</h1>
    })

    const nameList = names.map((n)=>{
        return <h1>{n}</h1>
    })
    return (
        <div>
            <h1>React Maps</h1>
            {numberList}
            {nameList}
        </div>
    )
}

export default Map
