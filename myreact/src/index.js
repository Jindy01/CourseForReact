import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/styles/global.css';
<<<<<<< HEAD
import Routers from '../src/components/screens/home/Router';
import Home from './components/screens/home/Home';
// import Home from './components/screens/home/Home';
=======
import Router from '../src/components/Router';
>>>>>>> 5f01ce466be60ff552b40fa82fea62782292aa24

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
