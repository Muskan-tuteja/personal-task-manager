import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Please fill all fields");

    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
      deadline
    };

    addTask(newTask);

    setTitle(""); setDescription(""); setStatus("Pending"); setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description"></textarea>
      <select value={status} onChange={e=>setStatus(e.target.value)}>
        
        
        <option>Pending</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <input type="date" value={deadline} onChange={e=>setDeadline(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
