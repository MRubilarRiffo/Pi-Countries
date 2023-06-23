import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
    return (
        <>
            <div className="containerCard">
                <Link to={`/details/${props.id}`}>
                    <div>
                        <img src={props.flag} alt="" />
                    </div>
                    <div className="props-card">
                        <h2>{props.name}</h2>
                        <p>{props.continent}</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export { Card };