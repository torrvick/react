import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeReducer';

const store = configureStore({
	reducer: themeReducer,
});

export default store;
