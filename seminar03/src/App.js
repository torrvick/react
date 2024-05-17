import './App.css';
import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import Converter from './components/TemperatureConverter/Converter';

function App() {
	const [taskOpen, setTaskOpen] = React.useState({
		task1: false,
		task2: false,
	});

	const handleClick = (taskNumber) => {
		setTaskOpen((prevOpen) => ({
			...prevOpen,
			[taskNumber]: !prevOpen[taskNumber],
		}));
	};

	return (
		<Container maxWidth="md">
			<List>
				<ListItemButton onClick={() => handleClick('task1')}>
					<ListItemText primary="Задача 1. Конвертер" />
					{taskOpen.task1 ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={taskOpen.task1} timeout="auto" unmountOnExit>
					<ListItem sx={{ pl: 6, pt: 2 }}>
						<Converter />
					</ListItem>
				</Collapse>

				<ListItemButton onClick={() => handleClick('task2')}>
					<ListItemText primary="Задача 2. ToDo" />
					{taskOpen.task2 ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={taskOpen.task2} timeout="auto" unmountOnExit>
					<ListItem sx={{ pl: 6, pt: 2 }}>
						<Converter />
					</ListItem>
				</Collapse>
			</List>
		</Container>
	);
}

export default App;

