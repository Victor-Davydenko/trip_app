import React from 'react';
import ScheduledTrips from '../components/ScheduledTrips/ScheduledTrips';
import TodayWeather from '../components/TodayWeather/TodayWeather';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import AddTripButton from '../components/AddTripButton/AddTripButton';
import Modal from '../components/Modal/Modal';
import AddTripForm from '../components/AddTripForm/AddTripForm';
import Timer from '../components/Timer/Timer';
import FilterBar from '../components/FilterBar/FilterBar';

const Home = () => {
	return (
		<div className='homepage'>
			<div className='main'>
				<FilterBar />
				<div className='main__content'>
					<div className='trips-section'>
						<ScheduledTrips />
						<AddTripButton />
						<Modal title={'Create trip'}>
							<AddTripForm />
						</Modal>
					</div>
					<WeatherForecast />
				</div>
			</div>
			<div className='sidebar'>
				<div className='sidebar__inner'>
					<TodayWeather />
					<Timer />
				</div>
			</div>
		</div>
	);
};

export default Home;
