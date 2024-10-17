import React from 'react';
import TaskCard from './TaskCard';
import './KanbanBoard.css';

const KanbanBoard = ({ groupedData }) => {
  return (
    <div className="kanban-board">
      <div className="side-column">
        <h3>Left Side</h3>
        <TaskCard task={groupedData.LeftSide[0]} />  {/* CAM-5 */}
        <TaskCard task={groupedData.LeftSide[1]} />  {/* CAM-8 */}
      </div>
      <div className="main-board">
        <div className="column todo">
          <h3>Todo</h3>
          {groupedData["Todo"].map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <div className="column in-progress">
          <h3>In Progress</h3>
          {groupedData['In Progress'].map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <div className="column done">
          <h3>Done</h3>
          {groupedData.Done.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
