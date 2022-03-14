import React from 'react';
import axios from 'axios';

// Assets
import completeIcon from '../Assets/complete.svg';
import deleteIcon from '../Assets/delete.svg';
import TaskList from './TaskList';

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
    	// setTaskList(shownTasks.filter(item => item !== task));
			
			axios.delete('https://tasker-app-api.herokuapp.com/api/tasks')
				.then(res => {
					setTaskList(TaskList.filter(item => item !== task));
				})
				.catch(err => console.error(err));
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