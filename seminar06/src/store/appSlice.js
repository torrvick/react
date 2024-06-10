import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dialog: {
		open: false,
		mode: '',
		data: {},
	},
};

const appSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		closeDialog: (state) => {
			state.dialog.open = false;
			state.dialog.mode = '';
			state.dialog.data = {};
		},
		openAddDialog: (state) => {
			state.dialog.open = true;
			state.dialog.mode = 'add';
		},
		openEditDialog: (state, action) => {
			state.dialog.open = true;
			state.dialog.mode = 'edit';
			state.dialog.data = action.payload;
		},
	},
});

export const { toggleDialog, closeDialog, openAddDialog, openEditDialog } = appSlice.actions;

export default appSlice.reducer;
