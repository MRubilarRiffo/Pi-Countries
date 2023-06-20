import "./NavBar.css";
import { Form, Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { Sort } from '../Sort/Sort';
import { Filter } from "../Filter/Filter";

const NavBar = () => {
    return (
        <div className="containerNavBar">
            <Filter />
            <Link to='/app'><button>Home</button></Link>
            <Link to='/favorites'><button>Favoritos</button></Link>
            <Link to='/activities'><button>Actividades</button></Link>
            <SearchBar />
            <Sort />
        </div>
    );
};

export { NavBar };