import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivities } from "../../redux/actions";

const Forms = () => {
    const activities = useSelector((state) => state.activities);
    console.log(activities)

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countriesCopy);

    const createLength = (i) => Array.from({ length: i }, (_, index) => index);
    
    const options = {
        difficulty: ["Baja", "Media", "Alta"],
        season: ["Otoño", "Invierno", "Primavera", "Verano"],
        countries: countries.map((props) => props.name),
        duration: {
            days: createLength(101),
            hours: createLength(24),
            minutes: createLength(60)
        }
    };

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });

    const handleChange = (event) => {
        setActivity({
            ...activity,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addActivities(activity));
    };

    const handleSelectChange = (event) => {
        const optionValue = event.target.value;
        const isOptionSelected = activity.countries.includes(optionValue);

        setActivity({
            ...activity,
            [event.target.name]: isOptionSelected
                                    ? activity.countries.filter(option => option !== optionValue)
                                    : [...activity.countries, optionValue]
        });
    };

    return (
        <div>
            <form>
                <h1>Agregar Actividad</h1>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name="name" value={activity.name} onChange={handleChange}/>
                <hr />
                <label htmlFor="difficulty">Dificultad: </label>
                <select name="difficulty" value={activity.difficulty} onChange={handleChange}>
                    {options.difficulty.map((props) => <option key={props} value={props}>{props}</option>)}
                </select>
                <hr />
                <label htmlFor="season">Duración: </label>
                <select name="season" value={activity.season} onChange={handleChange}>
                    {options.season.map((props) => <option key={props} value={props}>{props}</option>)}
                </select>
                <hr />
                <label htmlFor="countries">Paises: </label>
                <select name="countries" value={activity.countries} onChange={handleSelectChange} multiple>
                    {options.countries.map((props) => <option key={props} value={props}>{props}</option>)}
                </select>
                <div>
                    <p>Opciones seleccionadas: {activity.countries.join(' - ')}</p>
                </div>
                <hr />

                <label htmlFor="duration">Duration: </label>
                {Object.keys(options.duration).map(key => (
                    <>
                        <select name={`duration-${key}`} value={activity.duration.key} onChange={handleChange}>
                            {options.duration[key].map((props) => <option key={props} value={props}>{props}</option>)}
                        </select>
                        <span> {key} </span>
                    </>
                ))}

            </form>

            <button type="SUBMIT" onClick={handleSubmit}>Agregar</button>
        </div>
    );
};

export { Forms };