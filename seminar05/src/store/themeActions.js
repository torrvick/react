import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from './themeActionsTypes';

const toggleTheme = () => ({
	type: TOGGLE_THEME,
});

const setLightTheme = () => ({
	type: LIGHT_THEME,
	payload: {
		theme: 'light',
	},
});

const setDarkTheme = () => ({
	type: DARK_THEME,
	payload: {
		theme: 'dark',
	},
});

export { toggleTheme, setLightTheme, setDarkTheme };
