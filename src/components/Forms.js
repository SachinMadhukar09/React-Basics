 import React,{ useState} from 'react'
 import '../App.css'
 
 function Forms() {

    function showInput(e){
        e.preventDefault();
        // alert(username)
        alert(password)
    }
    function printValues(e){
        e.preventDefault()
        var user={
            name:name,
            userName:userName,
            age:age,
        }
        console.log(user)
    }
    const[username , setUsername] = useState('')
    const[password , setPassword] = useState('')
    const[name , setName] = useState('')
    const[userName , setUserName] = useState('')
    const[age, setAge]= useState('')
     return (
         <div>
             <h1>React Form</h1>
             <h4>Form which perform action only</h4>
             <form action="">
                 <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} style={{margin:10}}/>
                 <br/>
                 <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{margin:10}}/>
                 <br/>
                 <button  onClick={showInput}>Show the input value</button>
             </form>
             <br/>
             <h4>Form which store values in console</h4>
             <form onSubmit={printValues}> 
             <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} style={{margin:10}}/>
             <br/>
             <input type="text" placeholder="userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}} style={{margin:10}}/>
             <br/>
             <input type="text" placeholder="age" value={age} onChange={(e)=>{setAge(e.target.value)}} style={{margin:10}}/>
             <br/>
             <button type="submit">Console Data</button>
             </form>
         </div>
     )
 }
 
 export default Forms