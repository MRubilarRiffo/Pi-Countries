import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivities } from "../../redux/actions";
import validation from "./validation";
import "./Forms.css";

const Forms = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countriesCopy);

    const createLength = (i) => Array.from({ length: i }, (_, index) => index + 1);
    
    const options = {
        // difficulty: createLength(5),
        difficulty:[ "Easy", "Moderate", "Intermediate", "Difficult", "Extreme" ],
        season: ["Otoño", "Invierno", "Primavera", "Verano"],
        countries: countries.map((props) => props.name),
    };

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "Easy",
        duration: "0",
        season: "Otoño",
        countries: []
    });

    const [error, setError] = useState({});

    const handleChange = ({ target: { value, name }}) => {
        if (name === "countries") {
            const isOptionSelected = activity.countries.includes(value);

            setActivity({
                ...activity,
                [name]: isOptionSelected
                            ? activity.countries.filter(option => option !== value)
                            : [...activity.countries, value]
            });
        } else {
            setActivity({
                ...activity,
                [name]: value,
            });
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(activity.name.length < 3 || !activity.countries.length || activity.duration < 1 || isNaN(activity.duration) || !activity.duration.length) {
            setError(validation({...activity, [event.target.name]: event.target.value }));
        } else {
            setActivity({
                name: "",
                difficulty: "Easy",
                duration: "0",
                season: "Otoño",
                countries: []
            });
            dispatch(createActivities(activity));
        };
    };

    return (
        <div className="container-all-form">
            <div className="card-forms">
                <div className="container-tittle-details">
                    <h2>Form</h2>
                    <hr />
                </div>
                <div className="container-form">
                    <form>
                        <div className="container-label-options">
                            <div className="label-error">
                                <label htmlFor="name">Name </label>
                                {error.n1 && <p>{error.n1}</p>}
                            </div>
                            <input type="text" name="name" value={activity.name} onChange={handleChange} />
                        </div>
                        <div className="container-label-options">
                            <label htmlFor="difficulty">Difficulty </label>
                            <select name="difficulty" value={activity.difficulty} onChange={handleChange}>
                                {options.difficulty.map((props) => <option key={props} value={props}>{props}</option>)}
                            </select>
                        </div>
                        <div className="container-label-options">
                            <div className="label-error">
                                <label htmlFor="duration">Duration (in hours) </label>
                                {error.d1 && <p>{error.d1}</p>}
                            </div>
                            <input type="text" name="duration" value={activity.duration} onChange={handleChange} />
                        </div>
                        <div className="container-label-options">
                            <label htmlFor="season">Season </label>
                            <select name="season" value={activity.season} onChange={handleChange}>
                                {options.season.map((props) => <option key={props} value={props}>{props}</option>)}
                            </select>
                        </div>
                        <div className="container-label-options">
                            <div className="label-error">
                                <label htmlFor="countries">Countries </label>
                                {error.c1 && <p>{error.c1}</p>}
                            </div>
                            <select name="countries" value={activity.countries} onChange={handleChange} multiple>
                                {options.countries.map((props) => <option key={props} value={props}>{props}</option>)}
                            </select>
                        </div>
                    </form>
                    <div className="renderizado-countries">
                        <p>{activity.countries.join(' - ')}</p>
                    </div>
                </div>
            </div>
            <div>
                <button type="SUBMIT" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export { Forms };