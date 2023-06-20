import { useState } from "react";
import { filterByContinent } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Filter = () => {
    const continents = [
        "Todo",
        "Asia",
        "Africa",
        "Europe",
        "Oceania",
        "South America",
        "North America",
        "Antarctica"
    ];    

    const [selectedOptions, setSelectedOptions] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSelectedOptions(event.target.selectedOptions[0].value);
        dispatch(filterByContinent(event.target.selectedOptions[0].value));
    };

    return (
        <div>
            <p>Filter:</p>
            <select value={selectedOptions} onChange={handleChange}>
                {
                    continents.map((props) => <option key={props} value={props}>{props}</option>)
                }
            </select>
        </div>
    );
};

export { Filter };