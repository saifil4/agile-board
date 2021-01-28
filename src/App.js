import React, { useState } from 'react';
import './App.css';

//importing components
import SideNav from './components/sidenav';
import Main from './components/main';
import LabelForm from './components/labelform';

function App() {
  const [navOpenStatus, setNavOpenStatus] = useState(true);
  const [labelFormShow, setLabelFormShow] = useState(false);

  const [selectedLabel, setSelectedLabel] = useState(0);

  const [labelList, setLabelList] = useState([
    {
      'id': 1,
      'name': 'Bug',
      'iconclass': 'fas fa-bug'
    },
    {
      'id': 2,
      'name': 'Story',
      'iconclass': 'fas fa-th-large'
    },
    {
      'id': 3,
      'name': 'Task',
      'iconclass': 'fas fa-tasks'
    }
  ]);
  return (
    <div>
      <main className="wrapper">
        <section className={`navcontainer ${navOpenStatus ? "" : "closed"}`}>
          <SideNav
            setNavOpenStatus={setNavOpenStatus}
            navOpenStatus={navOpenStatus}
            labelList={labelList}
            setLabelFormShow={setLabelFormShow}
            setLabelList={setLabelList}
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel} />
        </section>
        <section className={`bodycontainer + ${navOpenStatus ? "" : "max"}`}>
          <div style={{ overflow: 'auto', height: '100%' }}>
            <Main
              setNavOpenStatus={setNavOpenStatus}
              navOpenStatus={navOpenStatus}
              labelList={labelList}
              selectedLabel={selectedLabel} />
          </div>
        </section>
        <LabelForm
          labelFormShow={labelFormShow}
          setLabelFormShowToClose={() => setLabelFormShow(false)}
          labelList={labelList}
          setLabelList={setLabelList}
        />
      </main>
    </div>
  );
}

export default App;
