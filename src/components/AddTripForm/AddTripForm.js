import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addDays, format } from 'date-fns';
import SelectField from '../common/SelectField/SelectField';
import DatePickerField from '../common/DatePickerField/DatePickerField';
import cities from '../../mockData/cities';
import { addTrip } from '../../store/scheduledTripSlice';
import { setIsModalOpen } from '../../store/modalSlice';
import createCitySelectOptionList from '../../helpers/helpers';

const AddTripForm = () => {
	const dispatch = useDispatch();
	const citySelectOptions = createCitySelectOptionList(cities);
	const maxPossibleDate = format(addDays(new Date(), 15), 'dd/MM/yyyy').split('/').reverse().join('-');
	const minPossibleDate = format(new Date(), 'dd/MM/yyyy').split('/').reverse().join('-');
	const initialFormValues = {
		city: '',
		startDate: '',
		endDate: '',
	};

	const validationSchema = Yup.object({
		city: Yup.string()
			.required('This is required field'),
		startDate: Yup.date()
			.required('This is required field'),
		endDate: Yup.date()
			.required('This is required field')
			.min(Yup.ref('startDate'), 'This date can not be before "Start date"'),
	});
	const handleFormSubmit = (values) => {
		dispatch(addTrip(values));
		dispatch(setIsModalOpen(false));
	};
	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={handleFormSubmit}
			validationSchema={validationSchema}
		>
			<Form>
				<SelectField label='City' name='city' required className='form-select'>
					<option value='' disabled>Please select a city</option>
					{citySelectOptions.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
				</SelectField>
				<DatePickerField
					name='startDate'
					label='Start date'
					id='startDate'
					max={maxPossibleDate}
					min={minPossibleDate}
					required
				/>
				<DatePickerField
					name='endDate'
					label='End date'
					id='endDate'
					max={maxPossibleDate}
					min={minPossibleDate}
					required
				/>
				<div className='form_btns'>
					<button type='button' className='form_btns__btn' onClick={() => dispatch(setIsModalOpen(false))}>Cancel</button>
					<button type='submit' className='form_btns__btn form_btns__btn--submit margin-left-10 margin-right-15'>Save</button>
				</div>
			</Form>
		</Formik>
	);
};

export default AddTripForm;
