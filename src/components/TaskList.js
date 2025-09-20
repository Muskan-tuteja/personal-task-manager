import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTaskStatus, deleteTask, editTask }) {
  if (tasks.length === 0) return <p className="no-tasks">No tasks yet!</p>;

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTaskStatus={updateTaskStatus} 
          deleteTask={deleteTask} 
          editTask={editTask} // pass edit function
        />
      ))}
    </div>
  );
}

export default TaskList;
