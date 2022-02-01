import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  // State
  const [taskList, setTaskList] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState([]);

  // Local Functions
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    saveTasksLocally();
  }, [taskList]);

  const saveTasksLocally = () => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  const getLocalTasks = () => {
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      const localTasks = JSON.parse(localStorage.getItem('tasks'));
      setTaskList(localTasks);
    }
  }

  // DOM
  return (
    <div className="App">
      <header>
        <nav>
          <p className='logo'>Tasker</p>
        </nav>
      </header>
      <section>
        <div className='container'>
          <AddTask taskList={taskList} setTaskList={setTaskList}/>
          <TaskList taskList={taskList} setTaskList={setTaskList}/>
        </div>
      </section>
    </div>
  );
}

export default App;
