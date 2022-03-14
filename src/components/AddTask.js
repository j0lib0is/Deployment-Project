import axios from 'axios';
import React, { useState } from 'react';

const AddTask = (props) => {

  // Destructure Props
  const { taskList, setTaskList } = props;

  // State
  const [task, setTask] = useState({
    name: '',
    complete: false,
    id: Math.floor(Math.random() * 1000)
    });

  // Local Functions
  const handleChange = e => {
    setTask({
      ...task,
      name: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // setTaskList([...taskList, {
    //   name: input,
    //   complete: false,
    //   id: Math.floor(Math.random() * 1000)
    // }]);
    // setInput('');

    axios.post('https://tasker-app-api.herokuapp.com/api/tasks', task)
      .then(res => {
        setTaskList([...taskList, task]);
      })
      .catch(err => console.error(err));
    setTask({
      ...task,
      name: '',
    })
  }

  // Return
	return (
		<form onSubmit={handleSubmit} className='taskForm'>
      <input
        type='text'
        name='name'
        value={task.name}
        onChange={handleChange}
        className='taskInput'
      />
      <button className='taskSubmit'>Add</button>
    </form>
	);
}

export default AddTask;