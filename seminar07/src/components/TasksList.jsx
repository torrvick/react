import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../store/tasksSlice';

const TasksList = () => {
	const dispatch = useDispatch();
	const { tasks, loadingStatus } = useSelector((state) => state.tasks);

	useEffect(() => {
		if (loadingStatus === '') {
			dispatch(getTasks());
		}
	}, [loadingStatus, dispatch]);

	return (
		<div className="App">
			<h2>Список задач</h2>
			{loadingStatus === 'loading' && <div>Загрузка...</div>}
			{loadingStatus === 'failed' && <div>Ошибка загрузки данных</div>}
			{loadingStatus === 'succeeded' && (
				<ul>
					{tasks.map((task) => (
						<li key={task.id} className={task.completed ? 'completed' : undefined}>
							{task.content}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TasksList;
