import { Link } from 'react-router-dom';

function ErrorPage() {
	return (
		<>
			<h1>Ошибка</h1>
			<p>Такой страницы не существует</p>
			<Link to={'/'}>Вернуться на главную</Link>
		</>
	);
}

export default ErrorPage;
