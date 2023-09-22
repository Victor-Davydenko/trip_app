import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allScheduledTrips: [],
	searchTripQuery: '',
	sortTripOrder: 'default',
};

const scheduledTripSlice = createSlice({
	name: 'scheduledTrips',
	initialState,
	reducers: {
		addTrip(state, { payload }) {
			state.allScheduledTrips.push(payload);
		},
		selectTrip(state, { payload }) {
			state.allScheduledTrips = state.allScheduledTrips
				.map((trip) => (trip.id === payload ? { ...trip, isSelected: true } : { ...trip, isSelected: false }));
		},
		setSearchQuery(state, { payload }) {
			state.searchTripQuery = payload;
		},
		setSortOrder(state, { payload }) {
			state.sortTripOrder = payload;
		},
	},
});

export const {
	addTrip, selectTrip, setSearchQuery, setSortOrder,
} = scheduledTripSlice.actions;
export default scheduledTripSlice.reducer;
