import React, { Component } from "react";

class Classcomponents extends Component {
  render() {
    return (
      <div>
        <h1>This is Class Componenet</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
}

export default Classcomponents;
