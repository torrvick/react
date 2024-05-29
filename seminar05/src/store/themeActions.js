import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from './themeActionsTypes';

const toggleTheme = () => ({
	type: TOGGLE_THEME,
});

const setLightTheme = () => ({
	type: LIGHT_THEME,
});

const setDarkTheme = () => ({
	type: DARK_THEME,
});

export { toggleTheme, setLightTheme, setDarkTheme };
