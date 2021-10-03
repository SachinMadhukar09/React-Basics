import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  async function getdatausingfetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await response.json());
    // setPosts(response.json());
  }

  const titlelist = posts.map((post) => {
    return (
      <div>
        <h3>{post.id} - {post.title}</h3>
      </div>
    );
  });

  const bodylist = posts.map((post) => {
    return (
      <div>
        <h2>{post.id} - {post.body}</h2>
      </div>
    );
  });

  function getdatausingaxios() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>HTTP Methods</h1>
      <h2>Fetch Method</h2>
      <button className="btn btn-primary" onClick={getdatausingfetch}>
        Get Title Using Fetch
      </button>
      {titlelist}
      <h2>Axios Method</h2>
      <button className="btn btn-success" onClick={getdatausingaxios}>
        Get Bosy Using Axios
      </button>
      {bodylist}
    </div>
  );
}

export default Home;
