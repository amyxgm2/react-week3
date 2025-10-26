import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/TodoList.css";

function TaskDetail() {
  const { state } = useLocation();
  const task = state?.task;

  if (!task) return <p>No task data found.</p>;

  return (
    <div className="task-detail">
      <Link to="/todo" className="back-link">← Back to List</Link>
      <h2>Task Detail</h2>
      <p><strong>Task:</strong> {task.text}</p>
      <p><strong>Status:</strong> {task.done ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TaskDetail;