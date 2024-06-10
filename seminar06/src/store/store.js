import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import appReducer from './appSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		appState: appReducer,
	},
});
