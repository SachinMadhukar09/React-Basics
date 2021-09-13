import React, { Component } from "react";

class Managestate extends Component {
  constructor() {
    super();
    this.state = {
      name: "IRONMAN",
      age: "40",
      power: "500",
    };
  }
  changedata = () =>{
      this.setState({
          name:"Hulk"
          ,age:"50",
          power:"1000"

      })
  }


  render() {
    return (
      <div>
        <h1>This is Manage State</h1>
        <h2>Name:{this.state.name}</h2>
        <h2>Age:{this.state.age}</h2>
        <h2>Power:{this.state.power}</h2>
        <button onClick={this.changedata}>Change Data</button>
      </div>

    );
  }
}

export default Managestate;
