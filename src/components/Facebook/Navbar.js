import React, { useState } from "react";
import swal from "sweetalert";
import "./Navbar.css";

function Navbar() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function login() {
    var users = JSON.parse(localStorage.getItem("Users"));
    var i = 0;
    for (var user in users) {
      if (user.username === username && user.password === password) {
        i++;
      }
    }
    if (i === 1) {
      swal("Login Succesful", "Congratulation", "success");
    } else {
      swal("Unsuccesful");
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
