import './App.css';
import { Routes, Route, useLocation, Form } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Cards } from './components/Cards/Cards';
import { NavBar } from './components/NavBar/NavBar';
import { Favorites } from './components/Favorites/Favorites';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/actions';
import { Details } from './components/Details/Details';
import { Forms } from './components/Forms/Forms';

function App() {
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries(''))
	}, []);

	return (
		<>
			{(pathname === '/app' || pathname === '/favorites') && <NavBar />}
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/app' element={<Cards />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/activities' element={<Forms />} />
			</Routes>
		</>
	);
};

export default App
