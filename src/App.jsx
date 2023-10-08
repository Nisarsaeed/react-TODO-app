import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTasksData } from './Components/Hooks/useTasksData';
import Menu from './Components/Menu';
import TaskPage from './Components/TaskPage'
import './App.css';

function App() {
 const {todayTasks, upComingTasks} = useTasksData();

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<TaskPage day='Today' dateColDisplay='none' taskData={todayTasks} />} />
          <Route path='/upComming' element={<TaskPage day='Up Comming' dateColDisplay='table-cell' taskData={upComingTasks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
