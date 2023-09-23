import React from 'react';
import ReactDOM from 'react-dom';
import Providers from 'providers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

