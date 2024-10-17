import React from 'react';
import KanbanBoard from './components/KanbanBoard';

const groupedData = {
  LeftSide: [
    { id: 'CAM-5', title: 'Add Multi-Language Support-Enable Multi-Language Support Within the...', description: 'Feature Request'},
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', description: 'Feature Request'},
  ],
  Todo: [
    { id: 'CAM-4', title: 'Add Multi-Language Support', description: 'Feature Request'},
    { id: 'CAM-2', title: 'Implement Email Notification System', description: 'Feature Request'},
    { id: 'CAM-1', title: 'Update User Profile Page UI', description: 'Feature Request' },
  ],
  'In Progress': [
    { id: 'CAM-3', title: 'Optimize Database Queries for Performance', description: 'Performance'},
  ],
  Done: [
    { id: 'CAM-6', title: 'Enhance Search Functionality', description: 'Feature Request'},
    { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', description: 'Feature Request'},
    { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', description: 'Feature Request'},
    { id: 'CAM-10', title: 'Upgrade Server Infrastructure', description: 'Feature Request'},
    { id: 'CAM-9', title: 'Implement Role-Based Access Control', description: 'Feature Request'},
  ],
};

function App() {
  return (
    <div className="App">
      <KanbanBoard groupedData={groupedData} />
    </div>
  );
}

export default App;
