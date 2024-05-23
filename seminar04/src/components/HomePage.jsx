import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<>
			<h1>Главная страница</h1>
			<p>Вы находитесь на главной странице</p>
			<Link to={'/about'}>Почитать о Нас</Link>
		</>
	);
}

export default HomePage;
