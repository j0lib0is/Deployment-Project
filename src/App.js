import React, { useState } from 'react';
import './App.css';

// Components
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

// Initial State
const defaultTasks = [{name: 'Milk', complete: false}, {name: 'Eggs', complete: false}, {name: 'Bread', complete: false}]

function App() {
  const [taskList, setTaskList] = useState(defaultTasks);

  // Local Function
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  }

  const deleteTask = (deletedTask) => {
    const newTaskList = taskList.filter(task => task !== deletedTask)
    setTaskList(newTaskList);
  }

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
          <TaskList taskList={taskList} deleteTask={deleteTask}/>
        </div>
      </section>
    </div>
  );
}

export default App;
