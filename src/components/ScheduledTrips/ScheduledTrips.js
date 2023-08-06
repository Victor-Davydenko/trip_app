import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import getWeather from '../../store/thunkAction';
import NothingFound from '../NothingFound/NothingFound';

const ScheduledTrips = () => {
	const { allScheduledTrips, searchTripQuery, sortTripOrder } = useSelector((state) => state.scheduledTripSlice);
	const firstTrip = allScheduledTrips[0];
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeather({
			city: firstTrip.city, startDate: firstTrip.startDate, endDate: firstTrip.endDate, id: 0,
		}));
	}, []);

	const sortedTrips = useMemo(() => {
		const sortedTrips = [...allScheduledTrips];
		if (sortTripOrder === 'default') {
			return sortedTrips;
		}
		return sortedTrips.sort((a, b) => {
			const dateA = new Date(a.startDate);
			const dateB = new Date(b.startDate);
			return sortTripOrder === 'desc' ? dateB - dateA : dateA - dateB;
		});
	}, [sortTripOrder, allScheduledTrips]);

	const filteredAndSortedTrips = sortedTrips.filter((trip) => trip.city.toLowerCase().includes(searchTripQuery.toLowerCase()));

	return (
		<ul className='scheduled_trips'>
			{filteredAndSortedTrips.length ? (filteredAndSortedTrips.map(({
				city, startDate, endDate, imageUrl, isSelected, id,
			}) => {
				return (
					<TripCard
						key={id}
						city={city}
						image={imageUrl}
						startDate={startDate}
						endDate={endDate}
						isSelected={isSelected}
						id={id}
					/>
				);
			})) : <NothingFound />}
		</ul>
	);
};

export default ScheduledTrips;
