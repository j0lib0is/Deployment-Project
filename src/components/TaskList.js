import React from 'react';

// Components
import Task from './Task'

const TaskList = (props) => {

	// Destructure Props
	const { taskList, deleteTask } = props;
	
	// Return
	return (
		<ul className='taskList'>
			{taskList.map((task) => {
				return <Task task={task} deleteTask={deleteTask} key={task.name}/>;
			})}
		</ul>
	);
}

export default TaskList;