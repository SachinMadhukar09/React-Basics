import React , {useState} from "react";
import data from "./Whizlabs.json";
import "./Whizlabs.css" 

function Whizlabs() {
  const [description, setDescription] = useState(data[0].description)
  const [title, setTitle] = useState(data[0].title)
  
  const show = (id) => { 
    setDescription(data[id].description)
    setTitle(data[id].title)
  }
  return (
    <div className="whats-new-main">
      <div className="whats-new-left">
          <h1 className="whats-new-heading" >What's new</h1>
        <div className="whats-new-left-heading">
          {data.map((datas) => {
            return <div key={datas.id} onClick={() => show(datas.id)}>{datas.title}</div>;
          })}
        </div>
      </div>
      <div className="whats-new-middle">
        <div className="">
              <div key={data.id}>
              <h1 className="whats-new-heading" >{title}</h1>
              <p>{description}</p>
              </div>
        </div>
      </div>
      <div className="whats-new-dropdown">
          <select className="whats-new-select" >
            <option className="whats-new-option" >2022</option>
            <option className="whats-new-option" >2021</option>
            <option className="whats-new-option" >2020</option>
            <option className="whats-new-option" >2019</option>
          </select>
       
      </div>
    </div>
  );
}

export default Whizlabs;
