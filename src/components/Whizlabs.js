import React from "react";
import "./Whizlabs.css";

function Whizlabs() {
  return (
    <div className="main">
      <div className="Left">
        <div className="heading">
          <h1>What's New</h1>
        </div>
        <div className="options">
          <div className="one">One or more</div>
          <div className="one">One or more</div>
          <div className="one">One or more</div>
          <div className="one">One or more</div>
          <div className="one">One or more</div>
        </div>
      </div>
      <div className="Content">
        <div className="Text">
          <p>Lorem ipsum dolor sit am</p>
        </div>
      </div>
      <div className="dropdown">
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </div>
    </div>
  );
}

export default Whizlabs;
