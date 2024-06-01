import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dialogOpen: false,
};

const appSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		toggleDialog: (state) => {
			state.dialogOpen = !state.dialogOpen;
		},
	},
});

export const { toggleDialog } = appSlice.actions;

export default appSlice.reducer;
