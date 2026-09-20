import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/Home';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
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
