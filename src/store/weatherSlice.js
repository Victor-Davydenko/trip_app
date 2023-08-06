import { createSlice } from '@reduxjs/toolkit';
import getWeather from './thunkAction';

const initialState = {
	isLoading: false,
	weather: {
		today: {
			days: [
				{
					icon: null,
					temp: null,
				},
			],
			address: null,
		},
		byPeriod: {},
	},
	error: null,
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getWeather.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getWeather.fulfilled, (state, { payload }) => {
			const [todayWeather, weatherByPeriod] = payload;
			state.isLoading = false;
			state.weather.today = todayWeather;
			state.weather.byPeriod = weatherByPeriod;
		});
		builder.addCase(getWeather.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export default weatherSlice.reducer;
