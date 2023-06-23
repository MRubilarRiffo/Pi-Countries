import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountries, paginacion } from "../../redux/actions";
import "./SearchBar.css";

const SearchBar = () => {
    const [id, setId] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setId(event.target.value);
        dispatch(getCountries(event.target.value));
        dispatch(paginacion(1))
    };
    
    return (
        <div className="conteiner-searchbar">
            <input
                type="search"
                onChange={handleChange}
                value={id}
                placeholder="Buscar..."
            />
        </div>
    );
};

export { SearchBar };