import "./NavBar.css";
import { Form, Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { Sort } from '../Sort/Sort';
import { Filter } from "../Filter/Filter";

const NavBar = () => {
    return (
        <div className="containerNavBar">
            <SearchBar />
            <div className="container-button-navbar">
                <Link to='/app'><button>Home</button></Link>
                {/* <Link to='/favorites'><button>Favoritos</button></Link> */}
                <Link to='/activities'><button>Activities</button></Link>
            </div>
            <div className="container-filter-sort-navbar">
                <Filter />
                <Sort />
            </div>
            
        </div>
    );
};

export { NavBar };