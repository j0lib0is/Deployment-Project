import React, { useState } from 'react';

const AddTask = (props) => {

  // Destructure Props
  const { addTask } = props;

  // State
  const [task, setTask] = useState({
    name: '',
    complete: false,
  });

  // Local Functions
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
    setTask({
      ...task,
      name: '',
      complete: false,
    });
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