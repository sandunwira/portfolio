import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';

import NotFoundPage from './pages/NotFound';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

function App() {
	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App
