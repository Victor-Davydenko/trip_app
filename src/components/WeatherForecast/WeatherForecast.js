import React from 'react';
import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const ForecastForDay = ({ day }) => {
	const {
		datetime, icon, tempmax, tempmin,
	} = day;
	return (
		<li className='weather_forecast__single-day'>
			<p className='weather_forecast__day'>{format(parseISO(datetime), 'EEEE')}</p>
			<img className='weather_forecast__icon' src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/${icon}.svg`} alt={icon} />
			<p className='weather_forecast__temp'>
				{Math.round(tempmax)}&deg; / {Math.round(tempmin)}&deg;
			</p>
		</li>
	);
};

const WeatherForecast = () => {
	const { days } = useSelector((state) => state.weatherSlice.weather.byPeriod);
	const { error, isLoading } = useSelector((state) => state.weatherSlice);

	if (error) {
		return <ErrorComponent color='black' />;
	}
	if (isLoading) {
		return <LoadingComponent color='black' />;
	}
	return (
		<ul className='weather_forecast'>
			{days && days.map((day, index) => <ForecastForDay key={index} day={day} />)}
		</ul>
	);
};

export default WeatherForecast;
