import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import userSlice from './userSlice';
import scheduledTripSlice from './scheduledTripSlice';
import addTripMiddleware from './middlewares/middleware';
import modalSlice from './modalSlice';
import weatherSlice from './weatherSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['scheduledTripSlice'],
};

const rootReducer = combineReducers({
	userSlice,
	scheduledTripSlice,
	modalSlice,
	weatherSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(
		{
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		},
	).concat(logger, addTripMiddleware),
});

export const persistor = persistStore(store);

export default store;
