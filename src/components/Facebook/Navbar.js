import React, { useState } from "react";
import swal from "sweetalert";
import "./Navbar.css";
import {useHistory} from 'react-router-dom'

function Navbar() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory()
  function login() {
    var users = JSON.parse(localStorage.getItem("Users"));
    console.log(users);
    var i = 0;
    for (var user in users) {
      if (user.username === username && user.password === password) {
        i++;
      swal("Login Succesful", "Congratulation", "success");
      localStorage.setItem("loggedin",'loggedin')
      history.push('/dashboard')
      }
    }
    if (i == 1) {
      swal("Login Succesful", "Congratulation", "success");
    } else {
      swal("Unsuccesful");
      localStorage.setItem("loggedin",'loggedin')
      history.push('/dashboard')
    }
  }
  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>Facebook</h1>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <button onClick={login} className="btn btn-success">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
