import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { useEffect } from "react";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(id));
    }, [id]);
    
    const props = useSelector((state) => state.details);

    return (
        <div>
            <div>
                <img src={props.flag} alt="" style={{ width: '200px' }} />
            </div>
            <h1>{props.name}</h1>
            <p>Id: {props.id}</p>
            <p>Continente: {props.continent}</p>
            <p>Capital: {props.capital ? props.capital.join(' - ') : '-'}</p>
            <p>Sub-región: {props.subregion}</p>
            <p>Área: {props.area}</p>
            <p>Población: {props.population}</p>
        </div>
    );
};

export {Details};