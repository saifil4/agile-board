import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from 'hooks/useData';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

