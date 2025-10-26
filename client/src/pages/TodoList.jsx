import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={addTask} className="todo-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((t) => (
          <li key={t.id} className={t.done ? "done" : ""}>
            <span onClick={() => toggleTask(t.id)}>{t.text}</span>
            <div className="todo-buttons">
              <Link to={`/todo/${t.id}`} state={{ task: t }}>View</Link>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;