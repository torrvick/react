import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TodoList = () => {
	const [tasks, setTasks] = React.useState([
		{ id: 1, content: 'Выучить HTML', completed: false },
		{ id: 2, content: 'Выучить CSS', completed: false },
		{ id: 3, content: 'Выучить node.js', completed: false },
		{ id: 4, content: 'Выучить React', completed: false },
	]);

	const [newTask, setNewTask] = React.useState('');

	const handleTaskInput = ({ target }) => {
		setNewTask(target.value);
	};

	const addTask = () => {
		if (newTask.trim() === '') {
			return;
		}
		const lastId = tasks[tasks.length - 1]?.id ?? 0;
		setTasks([...tasks, { id: lastId + 1, content: newTask }]);
		setNewTask('');
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, completed: !task.completed };
				}
				return task;
			})
		);
	};

	const removeTask = (e, id) => {
		e.stopPropagation();
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addTask();
		}
	};

	const completedTasks = tasks.filter((task) => task.completed);
	const uncompletedTasks = tasks.filter((task) => !task.completed);
	const allTasks = [...uncompletedTasks, ...completedTasks];

	return (
		<List sx={{ width: '100%', maxWidth: 400, fontFamily: 'Arial, sans-serif' }}>
			{allTasks.map((task) => (
				<ListItem
					key={task.id}
					secondaryAction={
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={(e) => {
								removeTask(e, task.id);
							}}
						>
							<DeleteOutlineIcon sx={{ color: 'red', fontSize: 18 }} />
						</IconButton>
					}
					disablePadding
					onClick={() => toggleComplete(task.id)}
					sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
				>
					<ListItemButton role={undefined} dense sx={{ borderRadius: 10 }}>
						<ListItemText primary={task.content} />
					</ListItemButton>
				</ListItem>
			))}
			{tasks.length > 0 && <Divider variant="middle" />}

			<ListItem
				secondaryAction={
					<IconButton edge="end" aria-label="delete" sx={{ padding: 0 }} onClick={addTask}>
						<AddCircleOutlineIcon sx={{ color: '#4caf50', fontSize: 30 }} />
					</IconButton>
				}
				sx={{ mt: 2, paddingLeft: 0 }}
			>
				<TextField
					fullWidth
					label="Новая задача"
					variant="outlined"
					size="small"
					InputProps={{
						style: {
							borderRadius: 20,
						},
					}}
					onChange={handleTaskInput}
					onKeyDown={handleKeyDown}
					value={newTask}
				/>
			</ListItem>
		</List>
	);
};

export default TodoList;
