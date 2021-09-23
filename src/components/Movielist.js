import React, { useState, useEffect } from "react";
import Movieitem from "./Movieitem";
import axios from "axios";

function Movielist() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const key = "2c2ff111934687367af0997b76d1507c";
    const getmoviedata = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
      );
      setItems(res.data.results);
      console.log(res.data)
    };
    getmoviedata();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <Movieitem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movielist;
