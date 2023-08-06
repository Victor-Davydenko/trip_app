import React from 'react';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({
	required, name, label, id, ...props
}) => {
	const [field, meta] = useField(name);

	return (
		<div className="input_wrapper">
			<label htmlFor={id} className={required ? 'required' : ''}>
				{label}
			</label>
			<input
				{...field}
				{...props}
				type='date'
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default DatePickerField;
