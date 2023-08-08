import React from 'react';

const LoadingComponent = ({ color }) => {
	return (
		<div className='loader'>
			<div className={`lds-dual-ring lds-dual-ring--${color}`}></div>
		</div>
	);
};

export default LoadingComponent;
