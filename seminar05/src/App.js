import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
	const theme = useSelector((state) => state.theme);
	return (
		<div className={`wrapper theme-${theme}`}>
			<ThemeSwitcher />
		</div>
	);
}

export default App;

