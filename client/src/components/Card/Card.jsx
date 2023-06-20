import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({props}) => {
    return (
        <>
            <div className="containerCard">
                <Link to={`/details/${props.id}`}>
                    <div>
                        <img src={props.flag} alt="" style={{ width: '200px' }} />
                    </div>
                    <h2>{props.name}</h2>
                    {/* <p>Id: {props.id}</p> */}
                    <p>Continente: {props.continent}</p>
                    {/* <p>Capital: {props.capital ? props.capital.join(' - ') : '-'}</p> */}
                    {/* <p>Sub-región: {props.subregion}</p> */}
                    {/* <p>Área: {props.area}</p> */}
                    {/* <p>Población: {props.population}</p> */}
                </Link>
            </div>
        </>
    );
};

export { Card };