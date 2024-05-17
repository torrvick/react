import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';

const Converter = () => {
	const [celsius, setCelsius] = React.useState('');
	const [farenheit, setFarenheit] = React.useState('');

	const handleCelsiusInput = (e) => {
		const newCelsius = e.target.value;
		setCelsius(newCelsius);
		convertToFarenheit(newCelsius);
	};

	const handleFarenheitInput = (e) => {
		const newFarenheit = e.target.value;
		setFarenheit(newFarenheit);
		convertToCelsius(newFarenheit);
	};

	const convertToFarenheit = (value) => {
		if (checkInput(value, setFarenheit)) {
			setFarenheit((Number(value) * 1.8 + 32).toFixed(2));
		}
	};

	const convertToCelsius = (value) => {
		if (checkInput(value, setCelsius)) {
			setCelsius((((Number(value) - 32) * 5) / 9).toFixed(2));
		}
	};

	const checkInput = (value, setter) => {
		if (!value) {
			setter('');
			return false;
		}
		if (!isFinite(value)) {
			setter('Ошибка');
			return false;
		}
		return true;
	};

	return (
		<div>
			<Box
				component="form"
				sx={{
					display: 'flex',
					alignItems: 'center',
					'& > :not(style)': { m: 1 },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField label="Цельсии" color="secondary" focused value={celsius} onChange={handleCelsiusInput} />
				<DoubleArrowTwoToneIcon />
				<TextField
					label="Фаренгейты"
					color="secondary"
					focused
					value={farenheit}
					onChange={handleFarenheitInput}
				/>
			</Box>
		</div>
	);
};

export default Converter;
