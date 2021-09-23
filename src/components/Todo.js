import React, { useState } from "react";
import axios from 'axios';

let globalID = 0

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  
  function createTodo(e) {
      e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, {todo : task ,id: globalID++ }];
    });
  }
  function deleteTodo(itemID) {
      setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID));
  }
  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit" >Create Todo</button>
      </form>
      <ul>
        {todos.map((item , index) => {
          return (
                <div key={item.id}>
              <li>{item.todo}({item.id})</li>
              <button onClick={()=>deleteTodo(item.id)}>Delete Todo</button>
                </div>
              )
        })}
      </ul>
    </div>
  );
}

export default Todo;
