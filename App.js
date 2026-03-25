import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task].sort();

    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React - To Do App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;