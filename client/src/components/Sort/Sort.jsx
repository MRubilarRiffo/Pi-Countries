import { useState } from "react";
import "./Sort.css"
import { useDispatch } from "react-redux";
import { sortBy, getCountries } from "../../redux/actions";

const Sort = () => {
    const sortByArray = [
        {id: 1, label: "Default"},
        {id: 2, label: "Alfabético de A-Z"},
        {id: 3, label: "Alfabético de Z-A"},
        {id: 4, label: "Población de menor a mayor"},
        {id: 5, label: "Población de mayor a menor"}
    ];

    const [selectedOptions, setSelectedOptions] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSelectedOptions(event.target.selectedOptions[0].value);
        dispatch(sortBy(event.target.selectedOptions[0].value));
    };

    return (
        <div className="container-sort">
            <p>Sort by</p>
            <select value={selectedOptions} onChange={handleChange}>
                {
                    sortByArray.map((props) => <option key={props.id} value={props.id}>{props.label}</option>)
                }
            </select>
        </div>
    );
};

export { Sort };