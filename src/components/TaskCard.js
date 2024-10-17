import React from 'react';
import './TaskCard.css'; // Optional if you want to add custom styling for the task card

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h4>{task.id}: {task.title}</h4>
      <p>{task.description}</p>
      {/* <p>Priority: {task.priority}</p> */}
    </div>
  );
};

export default TaskCard;
