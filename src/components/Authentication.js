import React, { useState } from "react";
// import '../App.css'
import "./Authenticate.css";
import swal from "sweetalert";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function authenticate(e) {
    e.preventDefault();
    if (username == "sachin" && password == "sachin123") {
      swal("Login Succesful","Congratulation","success");
    } else {
      swal("Invalid","Please Re-enter Your Credential","error");
    }
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h1>React Authentication</h1>
        <form onSubmit={authenticate}>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
