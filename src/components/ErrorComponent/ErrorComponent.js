import React from 'react';

const ErrorComponent = ({ color }) => {
	return (
		<p style={{ color }} className='error_component'>
			Something went wrong, try it one more time later
		</p>
	);
};

export default ErrorComponent;
