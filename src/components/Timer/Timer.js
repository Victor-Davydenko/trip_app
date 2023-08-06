import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
	hoursPerDay, millisecondsPerSecond, minutesPerHour, secondsPerMinute,
} from './constants/timeConstants';

const Timer = () => {
	const [timeLeft, setTimeLeft] = useState(null);
	const selectedTripStartDate = useSelector((state) => state.scheduledTripSlice.allScheduledTrips).find((trip) => trip.isSelected).startDate;
	const countLeftTime = () => {
		const startDate = new Date(selectedTripStartDate).getTime();
		const currentDate = new Date().getTime();
		const timeZoneOffset = new Date(selectedTripStartDate).getTimezoneOffset();
		const timeLeft = startDate - currentDate + (timeZoneOffset * (millisecondsPerSecond * minutesPerHour));
		timeLeft >= 0 ? setTimeLeft(timeLeft) : setTimeLeft(0);
	};

	const formatTime = (time) => (time < 10 ? `0${time}` : time);

	useEffect(() => {
		const interval = setInterval(countLeftTime, millisecondsPerSecond);

		return () => clearInterval(interval);
	});

	const days = Math.floor(timeLeft / (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay));
	const hours = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay))
			/ (millisecondsPerSecond * secondsPerMinute * minutesPerHour));
	const minutes = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute * minutesPerHour)) / (millisecondsPerSecond * secondsPerMinute));
	const seconds = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute)) / millisecondsPerSecond);

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
