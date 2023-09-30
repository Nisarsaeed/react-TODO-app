import React from 'react';
// import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import TaskPage from './Components/TaskPage';
import './App.css';

function App() {
  return (
    <div className="App">
 
      <Menu />
     <TaskPage day="Today"/>
   
    </div>
  );
}

export default App;
