import React from 'react';
import './KanbanCard.css';  // Style this separately

const KanbanCard = ({ task }) => {
  return (
    <div className="kanban-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="kanban-card-details">
        <span>{task.priority}</span>
        {/* You can add user avatar here */}
      </div>
    </div>
  );
};

export default KanbanCard;
