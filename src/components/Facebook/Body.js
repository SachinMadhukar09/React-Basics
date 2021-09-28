import React,{ useState} from "react";
import "./Navbar.css";
import swal from "sweetalert";

function Body() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  function register(e) {     
      e.preventDefault()

      var users =JSON.parse(localStorage.getItem('Users') || "[]")
      var newuser={
          name:name,
          username:username,
          password:password,
      }
      users.push(newuser)
      localStorage.setItem("Users",JSON.stringify(users))
       swal("Registration Succesful","Congratulation","success");

  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DCcmAQSryod_bNtEnFvq87NAmKGZVt5R4Q&usqp=CAU"
          alt=""
          style={{ margin: 50 }}
        />
      </div>
      <div className="col-md-4">
        <h1>Register</h1>
        <form action="" className="form">
          <input type="text" className="form-control" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}  />
          <input type="text" className="form-control" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
          <input type="text" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
          <button type="submit" onClick={register} className="btn btn-primary">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Body;
