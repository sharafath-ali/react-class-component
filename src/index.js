import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './list.com/Listtem';
import App from './App';
import Navbar from './nav';
import Drop from './drop';
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
    <Navbar/>
    <App/>
  </div>
);

