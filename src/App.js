import React from 'react';
import './App.css';

//importing components
import TaskViewLoader from './components/taskviewloader';
import LabelForm from './components/LabelForm';


function App() {
  return (
    <main className="wrapper">
      <section className="bodycontainer">
        <div style={{ overflow: 'auto', height: '100%' }}>
          <TaskViewLoader />
        </div>
      </section>
    </main>
  );
}

export default App;
