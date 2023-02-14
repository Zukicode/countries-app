//React
import React, { useState } from 'react';

//Components
import { Header } from './components/Header/Header';
import { Main } from './components/Main';

//Pages
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details/Details';

//Router
import { Routes, Route } from 'react-router-dom';

function App() {
	const [countries, setCountries] = useState([]);

	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route
						path='/'
						element={
							<HomePage countries={countries} setCountries={setCountries} />
						}
					/>
					<Route path='/country/:name' element={<Details />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Main>
		</>
	);
}

export default App;
