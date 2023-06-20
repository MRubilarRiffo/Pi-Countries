import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountries, paginacion } from "../../redux/actions";

const SearchBar = () => {
    const [id, setId] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setId(event.target.value);
        dispatch(getCountries(event.target.value));
        dispatch(paginacion(1))
    };
    
    return (
        <div>
            <input
                type="search"
                onChange={handleChange}
                value={id}
            />
        </div>
    );
};

export { SearchBar };