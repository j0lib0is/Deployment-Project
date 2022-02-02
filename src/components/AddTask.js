import React, { useState } from 'react';

const AddTask = (props) => {

  // Destructure Props
  const { taskList, setTaskList } = props;

  // State
  const [input, setInput] = useState('');

  // Local Functions
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTaskList([...taskList, {
      name: input,
      complete: false,
      id: Math.random() * 1000
    }]);
    setInput('');
  }

  // Return
	return (
		<form onSubmit={handleSubmit} className='taskForm'>
      <input
        type='text'
        name='name'
        value={input}
        onChange={handleChange}
        className='taskInput'
      />
      <button className='taskSubmit'>Add</button>
    </form>
	);
}

export default AddTask;