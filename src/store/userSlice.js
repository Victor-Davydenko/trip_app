import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
	isLoggedIn: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			state.user = payload;
			state.isLoggedIn = true;
		},

		logOutUser(state) {
			state.isLoggedIn = false;
			state.user = {};
		},
	},
});

export const { setUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
