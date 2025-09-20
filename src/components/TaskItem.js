import React from "react";

function TaskItem({ task, updateTaskStatus, deleteTask }) {
  const getStatusColor = (status) => {
    if (status === "Done") return "green";
    if (status === "In Progress") return "orange";
    return "red";
  }

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.deadline && <p>Deadline: {task.deadline}</p>}
      <p>Status: <span style={{color: getStatusColor(task.status)}}>{task.status}</span></p>

      <select value={task.status} onChange={e=>updateTaskStatus(task.id, e.target.value)}>
        
        <option>Pending</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
