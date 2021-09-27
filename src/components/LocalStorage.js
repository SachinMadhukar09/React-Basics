import React, { useState, useEffect } from "react";

function LocalStorage() {
  const [username, setUsername] = useState("");
  const [saved, setSaved] = useState("");
  function addToLocalStorage() {
    localStorage.setItem("username", username);
  }
  useEffect(() => {
    setSaved(localStorage.getItem("username"));
  });

  const[player,setPlayer] = useState("");
  const [team,setTeam] = useState("");

  function saveData() {

    var datas=JSON.parse(localStorage.getItem("Data") || "[]")
    var data={
        player: player,
        team: team,
    };
    datas.push(data);
    localStorage.setItem("Data", JSON.stringify(datas));
  }
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <input
      className="form-control col-md-6"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={addToLocalStorage}
      >
        Add To Local Storage
      </button>
      <h1>The value of the username in localStorage is {saved}</h1>
      <br />
      <h1>Local Storage with array and objects</h1>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="player"  onChange={(e) =>{setPlayer(e.target.value)}}/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="team"  onChange={(e)=>{setTeam(e.target.value)}} />
        </div>
        <div className="col">
      <button className="btn btn-primary"onClick={saveData}>Save Data</button>
        </div>
      </div>

    </div>
  );
}

export default LocalStorage;
