import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ addTask, taskToEdit, updateTask }) {
  const navigate = useNavigate();

  // Initialize task state: if editing, prefill with taskToEdit
  const [task, setTask] = useState({
    id: taskToEdit ? taskToEdit.id : "",
    title: taskToEdit ? taskToEdit.title : "",
    description: taskToEdit ? taskToEdit.description : "",
    status: taskToEdit ? taskToEdit.status : "Pending",
    deadline: taskToEdit ? taskToEdit.deadline : ""
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      updateTask(task);
    } else {
      addTask({ ...task, id: uuidv4() });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })}
        required
      />
      <select
        value={task.status} // ✅ selected status same as task
        onChange={e => setTask({ ...task, status: e.target.value })}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <input
        type="date"
        value={task.deadline}
        onChange={e => setTask({ ...task, deadline: e.target.value })}
      />
      <button type="submit">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
