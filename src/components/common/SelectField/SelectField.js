import React from 'react';
import { useField } from 'formik';

function SelectField({
	required, label, className, ...props
}) {
	const [field, meta] = useField(props);

	return (
		<div className={`input_wrapper ${className}`}>
			<label className={required ? 'required' : ''}>
				{label}
			</label>
			<select
				{...field}
				{...props}
				className='select-field'
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
}

export default SelectField;
