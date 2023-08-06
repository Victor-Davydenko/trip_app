import React from 'react';

const Input = ({
	value, onChange, className, ...props
}) => {
	return (
		<div className={`input_wrapper ${className}`}>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				{...props}
			/>
		</div>
	);
};

export default Input;
