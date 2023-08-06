import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectTrip } from './scheduledTripSlice';
import WeatherService from '../weatherService/weatherService';

const getWeather = createAsyncThunk(
	'weather/getWeather',
	async ({
		city, startDate, endDate, id,
	}, { rejectWithValue, dispatch }) => {
		dispatch(selectTrip(id));
		try {
			return await WeatherService.getAllWeatherInfo(city, startDate, endDate);
		}
		catch (e) {
			return rejectWithValue(e.message);
		}
	},
);

export default getWeather;
