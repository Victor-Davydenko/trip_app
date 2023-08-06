import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './userSlice';
import scheduledTripSlice from './scheduledTripSlice';
import addTripMiddleware from './middlewares/middleware';
import modalSlice from './modalSlice';
import weatherSlice from './weatherSlice';

const store = configureStore({
	reducer: {
		userSlice,
		scheduledTripSlice,
		modalSlice,
		weatherSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, addTripMiddleware),
});

export default store;
