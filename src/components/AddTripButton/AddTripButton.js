import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../store/modalSlice';

const AddTripButton = ({ addTripHandler }) => {
	const dispatch = useDispatch();
	return (
		<div className='main__btn'>
			<div className='add_trip_btn' onClick={() => dispatch(setIsModalOpen(true))}>
				<span>Add trip</span>
			</div>
		</div>
	);
};

export default AddTripButton;
