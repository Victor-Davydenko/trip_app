import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allScheduledTrips: [
		{
			id: 0,
			city: 'Berlin',
			startDate: '2023-08-04',
			endDate: '2023-08-05',
			imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
			isSelected: true,
		},
	],
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
