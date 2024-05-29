import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setLightTheme, setDarkTheme } from '../store/themeActions';

const ThemeSwitcher = () => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	return (
		<div className={'theme-switcher'}>
			<p>Текущая тема: {theme}</p>
			<button className={`theme-btn btn-${theme}`} onClick={() => dispatch(toggleTheme())}>
				Переключить тему
			</button>
			<button className={`theme-btn btn-${theme}`} onClick={() => dispatch(setLightTheme())}>
				Включить светлую тему
			</button>
			<button className={`theme-btn btn-${theme}`} onClick={() => dispatch(setDarkTheme())}>
				Включить темную тему
			</button>
		</div>
	);
};

export default ThemeSwitcher;
