import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ErrorPage from './components/ErrorPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav>
					<Link to={'/'} className="nav-link">
						Home
					</Link>
					<Link to={'/about'}>About</Link>
				</nav>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<ErrorPage />} />{' '}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

