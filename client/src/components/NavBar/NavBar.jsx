import "./NavBar.css";
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { Sort } from '../Sort/Sort';
import { Filter } from "../Filter/Filter";

const NavBar = () => {
    const { pathname } = useLocation();
    return (
        <div className="containerNavBar">
            {!(pathname === '/activities' || pathname.startsWith('/details')) && <SearchBar />}
            <div className="container-button-navbar">
                <Link to='/app'><button>Home</button></Link>
                {/* <Link to='/favorites'><button>Favoritos</button></Link> */}
                <Link to='/activities'><button>Activities</button></Link>
            </div>

            {!(pathname === '/activities' || pathname.startsWith('/details')) && 
                (<div className="container-filter-sort-navbar">
                    <Filter />
                    <Sort />
                </div>)
            }
        </div>
    );
};

export { NavBar };