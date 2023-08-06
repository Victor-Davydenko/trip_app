import cities from '../../mockData/cities';

const addTripMiddleware = () => (next) => (action) => {
	if (action.type === 'scheduledTrips/addTrip') {
		const imageUrl = cities.find((city) => city.name === action.payload.city).image;
		const id = Math.random();
		action.payload = {
			...action.payload,
			isSelected: false,
			imageUrl,
			id,
		};
	}

	return next(action);
};

export default addTripMiddleware;
