import React from 'react';
import { useSelector } from 'react-redux';
import useTimer from '../../hooks/useTimer';
import { formatTime } from '../../helpers/helpers';

const Timer = () => {
	const selectedTripStartDate = useSelector((state) => state.scheduledTripSlice.allScheduledTrips).find((trip) => trip.isSelected).startDate;
	const {
		days, hours, minutes, seconds,
	} = useTimer(selectedTripStartDate);
	return (
		<div className='timer'>
			<div className='timer__days'>
				<span>{formatTime(days)}</span>
				<span>days</span>
			</div>
			<div className='timer__hours'>
				<span>{formatTime(hours)}</span>
				<span>hours</span>
			</div>
			<div className='timer__minutes'>
				<span>{formatTime(minutes)}</span>
				<span>minutes</span>
			</div>
			<div className='timer__seconds'>
				<span>{formatTime(seconds)}</span>
				<span>seconds</span>
			</div>
		</div>
	);
};

export default Timer;
