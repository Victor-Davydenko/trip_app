import { useEffect, useState } from 'react';
import {
	hoursPerDay,
	millisecondsPerSecond,
	minutesPerHour,
	secondsPerMinute,
} from '../components/Timer/constants/timeConstants';

const useTimer = (timeTillCount) => {
	const [timeLeft, setTimeLeft] = useState(null);
	const countLeftTime = () => {
		const startDate = new Date(timeTillCount).getTime();
		const currentDate = new Date().getTime();
		const timeZoneOffset = new Date(timeTillCount).getTimezoneOffset();
		const timeLeft = startDate - currentDate + (timeZoneOffset * (millisecondsPerSecond * minutesPerHour));
		timeLeft >= 0 ? setTimeLeft(timeLeft) : setTimeLeft(0);
	};

	useEffect(() => {
		const interval = setInterval(countLeftTime, millisecondsPerSecond);

		return () => clearInterval(interval);
	});

	const days = Math.floor(timeLeft / (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay));
	const hours = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay))
		/ (millisecondsPerSecond * secondsPerMinute * minutesPerHour));
	const minutes = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute * minutesPerHour)) / (millisecondsPerSecond * secondsPerMinute));
	const seconds = Math.floor((timeLeft % (millisecondsPerSecond * secondsPerMinute)) / millisecondsPerSecond);

	return {
		days, hours, minutes, seconds,
	};
};

export default useTimer;
