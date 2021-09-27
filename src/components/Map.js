import React, { useState } from "react";
import Authentication from "./Authentication"
import Form from "./Forms"

function Map() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [names, setNames] = useState(["Sachin", "Raj", "Bunny", "Kabir"]);

  const [player, setPlayer] = useState([
    { name: "Sachin", team: "MI" },
    { name: "Dhoni", team: "CSK" },
    { name: "Virat", team: "RCB" },
    { name: "Rohit", team: "MI" },
  ]);

  const numberList = number.map((number) => {
    return <h1>{number}</h1>;
  });

  const nameList = names.map((n) => {
    return <h1>{n}</h1>;
  });

  const playerList = player.map((player) => {
    return (
      <div>
        <h1>The Name of player is {player.name}</h1>
        <h2>He belongs to {player.team}</h2>
      </div>
    );
  });
  return (
    <div>
      {/* <h1>React Maps</h1> */}
      {/* {numberList}
      {nameList}
      {playerList} */}
      <h2>Conditional Rendering</h2>
      {
        (()=>{
          if(false) {
            return<div>
             <h1>If Statement is Excecuted</h1>
             {nameList}
             <Authentication/>
            </div>
          }
          else{
            return <div>
              
            <h2>Else Statement is Excecuted</h2>
            {playerList}
            <Form/>
            </div>
          }
        })()
      }
    </div>
  );
}

export default Map;
