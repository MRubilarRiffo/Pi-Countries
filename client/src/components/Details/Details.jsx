import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { useEffect } from "react";
import "./Details.css"
import { Card_Activities } from "../Card/Card_Activities";

const Details = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(id));
    }, [id]);
    
    const props = useSelector((state) => state.details);

    return (
        <>
            <div className="tittle-activities">
                <h1>Details</h1>
            </div>
            <div className="container-details">
                <div className="container-tittle-details">
                    <h2>{props.name}</h2>
                    <hr />
                </div>
                <div className="container-img-props-details">
                    <div className="container-img-details">
                        <img src={props.flag} alt="" />
                    </div>
                    <div className="container-props-details">
                        <div className="props-1-details">
                            <p>Id</p>
                            <p>Continent</p>
                            <p>Capital</p>
                            <p>Subregion</p>
                            <p>Area</p>
                            <p>Population</p>
                        </div>
                        <div className="props-2-details">
                            <p>{props.id}</p>
                            <p>{props.continent}</p>
                            <p>{props.capital ? props.capital.join(' - ') : '-'}</p>
                            <p>{props.subregion}</p>
                            <p>{props.area} m²</p>
                            <p>{props.population}</p>
                        </div>
                    </div>
                </div>
            </div>
            {props.Activities && <Card_Activities activities={props.Activities}/>}
        </>
    );
};

export {Details};