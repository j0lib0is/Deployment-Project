import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

// Initial State
const defaultTasks = [{name: 'Milk', complete: false}, {name: 'Eggs', complete: false}, {name: 'Bread', complete: false}]

function App() {
  // State
  const [taskList, setTaskList] = useState(defaultTasks);
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

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  }

  const deleteTask = (deletedTask) => {
    const newTaskList = taskList.filter(task => task !== deletedTask)
    setTaskList(newTaskList);
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
          <AddTask addTask={addTask}/>
          <TaskList taskList={taskList} setTaskList={setTaskList}/>
        </div>
      </section>
    </div>
  );
}

export default App;
