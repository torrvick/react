import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<>
			<h1>О нас</h1>
			<p>Тут супер хвалебный текст о нас</p>
			<Link to={'/'}>Вернуться на главную</Link>
		</>
	);
}

export default AboutPage;
