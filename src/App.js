import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import StatusFilter from './components/StatusFilter';

function App() {
  // State
  const [taskList, setTaskList] = useState([]);
  const [shownTasks, setShownTasks] = useState([]);
  const [status, setStatus] = useState('all');

  // Get Tasks from Local Storage
  useEffect(() => {
    const getLocalTasks = () => {
      if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]));
      } else {
        const localTasks = JSON.parse(localStorage.getItem('tasks'));
        setTaskList(localTasks);
      }
    };
    getLocalTasks();
  }, []);

  // Save Tasks to Local Storage
  useEffect(() => {
    const saveTasksLocally = () => {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    };
    saveTasksLocally();
  }, [taskList]);

  // Filter Tasks by Status
  useEffect(() => {
    const filterByStatus = () => {
      switch(status) {
        case 'complete':
          setShownTasks(taskList.filter(task => task.complete === true));
          break;
        case 'incomplete':
          setShownTasks(taskList.filter(task => task.complete === false));
          break;
        default:
          setShownTasks(taskList);
          break;
      }
    };
    filterByStatus();
  }, [taskList, status]);

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
          <AddTask taskList={taskList} setTaskList={setTaskList} />
          {taskList.length === 0 ? '' : <StatusFilter setStatus={setStatus} />}
          <TaskList shownTasks={shownTasks} setTaskList={setTaskList} />
        </div>
      </section>
    </div>
  );
}

export default App;
