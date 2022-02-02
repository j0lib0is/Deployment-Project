import React from 'react';

const StatusFilter = (props) => {
	
	// Destructure Props
	const { setStatus } = props;

	// Local Functions
	const handleStatus = e => {
		setStatus(e.target.value);
	}

	// Return
	return(
		<div className='filterWrapper'>
			<select onChange={handleStatus} className='statusFilter'>
				<option value='all'>All Tasks</option>
				<option value='complete'>Completed Tasks</option>
				<option value='incomplete'>Incomplete Tasks</option>
			</select>
		</div>
	);
}

export default StatusFilter;