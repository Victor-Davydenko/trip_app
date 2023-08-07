import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import getWeather from '../../store/thunkAction';
import NothingFound from '../NothingFound/NothingFound';
import useScroll from '../../hooks/useScroll';

const ScheduledTrips = () => {
	const { allScheduledTrips, searchTripQuery, sortTripOrder } = useSelector((state) => state.scheduledTripSlice);
	const selectedTrip = useSelector((state) => state.scheduledTripSlice.allScheduledTrips).find((trip) => trip.isSelected);
	const {
		city, startDate, endDate, id,
	} = selectedTrip;
	const sliderRef = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeather({
			city, startDate, endDate, id,
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
	const { onNextButtonClick, onPreviousButtonClick, hasScroll } = useScroll(sliderRef);

	return (
		<>
			<ul className='scheduled_trips' ref={sliderRef}>
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
			{hasScroll && <div className='slider_btns'>
				<button className='slider_btns__btn' onClick={onPreviousButtonClick}>Prev</button>
				<button className='slider_btns__btn' onClick={onNextButtonClick}>Next</button>
			</div>}
		</>
	);
};

export default ScheduledTrips;
