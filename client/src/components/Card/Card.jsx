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
                        <div className="container-name">
                            <h3>{props.name}</h3>
                        </div>
                        <div>
                            <p>{props.continent}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export { Card };