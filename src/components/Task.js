import React, { useState } from 'react';

// Assets
import completeIcon from '../Assets/complete.svg';
import deleteIcon from '../Assets/delete.svg';

const Task = (props) => {

	// Destructure Props
	const { task, deleteTask } = props;

	// State
	const [taskState, setTaskState] = useState(task);

	// Local Functions
	const handleComplete = () => {
		setTaskState({
			...taskState,
			complete: true
		});
	}

	const handleDelete = () => {
		deleteTask(task);
	}
	
	// Return
	return (
		<div className='taskDiv'>
			<li className={'taskItem ' + (taskState.complete ? 'done' : '')}>{task.name}</li>
			<button onClick={handleComplete} className='completeButton'>
				<img src={completeIcon} alt='check mark icon'/>
			</button>
			<button onClick={handleDelete} className='deleteButton'>
				<img src={deleteIcon} alt='trash can icon'/>
			</button>
		</div>
	);
}

export default Task;