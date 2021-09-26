import React , {useState} from "react";
import "../App.css";

function NewTodo() {

    const[newtask ,setNewTask] = useState('')
    const[tasks,setTasks] = useState([])

    function addTask() {
        setTasks([...tasks , newtask])
    }

    function removeTask(index) {
        var duplicatearray = [...tasks]
        duplicatearray.splice(index, 1) 
        setTasks(duplicatearray)

    }

    const taskslist = tasks.map((object , index) => {
        return <div className="row justify-content-center">
            <h1 className="col-md-6 text-left">{index+1}.{object}</h1>
            <button onClick={()=>{removeTask(index)}} className="col-md-1 btn btn-danger" >Delete</button>
        </div>

    })

  return (
    <div className="App">
      <h1>React Todo List</h1>
      <div >
        <input
          type="text"
        //   className="form-control col-md-6"
          placeholder="Taskname"
          value={newtask}
          onChange={(e)=>{setNewTask(e.target.value)}}
        />
        <button onClick={addTask} className="btn btn-success">Create</button>
      </div>
      <h1>{taskslist}</h1>
    </div>
  );
}

export default NewTodo;
