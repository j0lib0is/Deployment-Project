import React from 'react';

// Assets
import completeIcon from '../Assets/complete.svg';
import deleteIcon from '../Assets/delete.svg';

const Task = (props) => {

	// Destructure Props
	const { shownTasks, task, setTaskList } = props;

	// Local Functions
	const handleComplete = () => {
		setTaskList(shownTasks.map(item => {
			if (item.id === task.id) {
				return {
					...item,
					complete: !item.complete
				}
			};
			return item;
		}));
	}

	const handleDelete = () => {
    	setTaskList(shownTasks.filter(item => item !== task));
	}
	
	// Return
	return (
		<div className='taskDiv'>
			<li className={'taskItem ' + (task.complete ? 'done' : '')}>{task.name}</li>
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