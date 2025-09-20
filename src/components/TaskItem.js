import React from "react";
import { useNavigate } from "react-router-dom";

function TaskItem({ task, updateTaskStatus, deleteTask, editTask }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    editTask(task); // set task to edit in App state
    navigate("/add"); // navigate to form page
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: <span className={`status ${task.status.replace(" ", "-")}`}>{task.status}</span></p>
      <p>Deadline: {task.deadline}</p>
      <div className="task-buttons">
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        <button onClick={handleEdit} className="edit-btn">Edit</button>
      </div>
    </div>
  );
}

export default TaskItem;
