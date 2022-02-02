import React from 'react';

// Components
import Task from './Task';
import EmptyState from './EmptyState';

const TaskList = (props) => {

	// Destructure Props
	const { shownTasks, setTaskList } = props;
	
	// Return
	return (
		<div className='taskList'>
			{shownTasks.length === 0
				? <EmptyState/>
				: <ul className='taskList'>
					{shownTasks.map((task) => {
						return <Task shownTasks={shownTasks} task={task} setTaskList={setTaskList} key={task.id}/>;
					})}
				</ul>
			}
		</div>
	);
}

export default TaskList;