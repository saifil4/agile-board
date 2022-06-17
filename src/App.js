import React from 'react';
import './App.css';
import { DataProvider } from './DataContext';

//importing components
import Main from './components/Main';


function App() {
  return (
    <DataProvider>
      <main className="wrapper">
        <Main />
      </main>
    </DataProvider>
  );
}

export default App;
