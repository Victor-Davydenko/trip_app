import React from 'react';

const SortSelect = ({
	options, label, onSort, value, className,
}) => {
	return (
		<div className={`input_wrapper ${className}`}>
			<label htmlFor='sort'>{label}</label>
			<select id='sort' value={value} onChange={(e) => onSort(e.target.value)}>
				{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
			</select>
		</div>
	);
};

export default SortSelect;
