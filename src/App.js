import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./components/App.css";

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (task) => setTasks([...tasks, task]);

  // Update existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null); // clear edit state
  };

  const updateTaskStatus = (id, status) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  return (
    <Router basename="/personal-task-manager">
      <Routes>
        {/* Home page: heading + task list + Add Task button */}
        <Route
          path="/"
          element={
            <div className="App">
              <h1>Personal Task Manager</h1>
              <Link to="/add">
                <button className="add-task-btn">Add Task</button>
              </Link>
              <TaskList
                tasks={tasks}
                updateTaskStatus={updateTaskStatus}
                deleteTask={deleteTask}
                editTask={setTaskToEdit} // pass edit function
              />
            </div>
          }
        />

        {/* Add/Edit Task page: form */}
        <Route
          path="/add"
          element={
            <div className="App">
              <h1>{taskToEdit ? "Edit Task" : "Add New Task"}</h1>
              <TaskForm 
                addTask={addTask} 
                updateTask={updateTask} 
                taskToEdit={taskToEdit} 
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
