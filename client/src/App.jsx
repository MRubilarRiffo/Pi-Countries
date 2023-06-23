import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Cards } from './components/Cards/Cards';
import { NavBar } from './components/NavBar/NavBar';
import { Favorites } from './components/Favorites/Favorites';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivities, getCountries } from './redux/actions';
import { Details } from './components/Details/Details';
import { Activities } from './components/Activities/Activities';

function App() {
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries(''));
		dispatch(getActivities());
	}, []);

	return (
		<div className='container-app'>
			{(pathname === '/app' || pathname === '/favorites' || pathname === '/activities' || pathname.startsWith('/details')) && <NavBar />}
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/app' element={<Cards />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/activities' element={<Activities />} />
			</Routes>
		</div>
	);
};

export default App
