import React from 'react';
import { useDispatch } from 'react-redux';
import getWeather from '../../store/thunkAction';

const TripCard = (props) => {
	const { city, image, isSelected } = props;
	let { startDate, endDate } = props;
	const dispatch = useDispatch();
	startDate = startDate.split('-').reverse().join('.');
	endDate = endDate.split('-').reverse().join('.');
	return (
		<li className={isSelected ? 'trip active' : 'trip'} onClick={() => dispatch(getWeather(props))}>
			<div className='trip__img'>
				<img src={image} alt={city}/>
			</div>
			<div className='trip__info'>
				<p className='trip__destination'>
					{city}
				</p>
				<span className='trip__dates'>
					{startDate} - {endDate}
				</span>
			</div>
		</li>
	);
};

export default TripCard;
