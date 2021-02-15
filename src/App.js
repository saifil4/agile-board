import React from 'react';
import { useSelector } from 'react-redux';

//importing components
import SideNav from './components/sidenav';
import TaskViewLoader from './components/taskviewloader';
import LabelForm from './components/labelform';



function App() {
  const isNavOpen = useSelector(state => state.isNavOpen);

  return (
      <main className="wrapper">
        <section className={`navcontainer ${isNavOpen ? "" : "closed"}`}>
          <SideNav />
        </section>
        <section className={`bodycontainer + ${isNavOpen ? "" : "max"}`}>
          <div style={{ overflow: 'auto', height: '100%' }}>
            <TaskViewLoader />
          </div>
        </section>
        <LabelForm />
      </main>
  );
}

export default App;
