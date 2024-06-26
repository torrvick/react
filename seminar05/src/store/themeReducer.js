import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from './themeActionsTypes';

const initialState = {
	theme: 'light',
};

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				theme: state.theme === 'light' ? 'dark' : 'light',
			};
		case LIGHT_THEME:
			return {
				theme: 'light',
			};
		case DARK_THEME:
			return {
				theme: 'dark',
			};

		default:
			return state;
	}
};

export default themeReducer;
