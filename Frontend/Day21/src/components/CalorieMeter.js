import React, { useState, useEffect } from "react";
import "./CalorieMeter.css";

function Task({ task, index, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      You have consumed {task.calorie} in <b>{task.title}</b>
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");
  const [calorie, setCalorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value && !calorie) return;
    addTask(value, calorie);
    setValue("");
    setCalorie("");
  };
  return (
    <form id="nameform">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        className="input-num"
        value={calorie}
        placeholder="calories"
        onChange={(e) => setCalorie(e.target.value)}
      />
      <button
        type="submit"
        form="nameform"
        value="Submit"
        onSubmit={handleSubmit}
      >
        submit
      </button>
    </form>
  );
}

function CalorieMeter() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Pizza",
      calorie: 30,
    },
    {
      title: "pasta",
      calorie: 30,
    },
    {
      title: "Burger",
      calorie: 30,
    },
    {
      title: "Pizza",
      calorie: 30,
    },
    {
      title: "pasta",
      calorie: 30,
    },
    {
      title: "Burger",
      calorie: 30,
    },
    {
      title: "Pizza",
      calorie: 30,
    },
    {
      title: "pasta",
      calorie: 30,
    },
    {
      title: "Burger",
      calorie: 30,
    },
    {
      title: "Pizza",
      calorie: 30,
    },
    {
      title: "pasta",
      calorie: 30,
    },
    {
      title: "Burger",
      calorie: 30,
    },
    {
      title: "Pizza",
      calorie: 30,
    },
    {
      title: "pasta",
      calorie: 30,
    },
    {
      title: "Burger",
      calorie: 30,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title, calorie) => {
    const newTasks = [...tasks, { title, completed: false, calorie }];
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="scrol">
        <h1>Calorie Calculator</h1>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </div>
      <div className="header">Items Consumed ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} removeTask={removeTask} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CalorieMeter;
