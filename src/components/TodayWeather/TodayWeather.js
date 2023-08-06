import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

const TodayWeather = () => {
	const today = format(new Date(), 'EEEE');
	const todayWeather = useSelector((state) => state.weatherSlice.weather.today);
	const { icon } = todayWeather.days[0];
	const { temp } = todayWeather.days[0];
	return (
		<div className='today_weather'>
			<p className='today_weather__day'>
				{today}
			</p>
			<div className='today_weather__weather'>
				{icon && <img className='today_weather__icon' src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/${icon}.svg`} alt={icon} />}
				<span className='today_weather__temp'>
					{Math.round(temp)} <sup>&#8451;</sup>
				</span>
			</div>
			<p className='today_weather__location'>
				{todayWeather.address}
			</p>
		</div>
	);
};

export default TodayWeather;
