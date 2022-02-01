import React from 'react';

// Components
import Task from './Task';
import EmptyState from './EmptyState';

const TaskList = (props) => {

	// Destructure Props
	const { taskList, setTaskList, deleteTask } = props;
	
	// Return
	return (
		<div className='taskList'>
			{taskList.length === 0
				? <EmptyState/>
				: <ul className='taskList'>
					{taskList.map((task) => {
						return <Task taskList={taskList} task={task} setTaskList={setTaskList} key={task.name}/>;
					})}
				</ul>
			}
		</div>
	);
}

export default TaskList;