import React from 'react';
import KanbanCard from './KanbanCard';
import './KanbanColumn.css';  // Style this separately

const KanbanColumn = ({ title, tasks }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="kanban-cards">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
