import React from 'react';

// Components
import Task from './Task'

const TaskList = (props) => {

	// Destructure Props
	const { taskList, setTaskList, deleteTask } = props;
	
	// Return
	return (
		<ul className='taskList'>
			{taskList.map((task) => {
				return <Task taskList={taskList} task={task} setTaskList={setTaskList} key={task.name}/>;
			})}
		</ul>
	);
}

export default TaskList;