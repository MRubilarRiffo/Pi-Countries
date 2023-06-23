import { useDispatch, useSelector } from "react-redux";
import "./Card_Activities.css"
import { AiFillDelete } from "react-icons/ai";
import { deleteActivities } from "../../redux/actions"

const Card_Activities = ({ activities }) => {

    const dispatch = useDispatch();

    const difficulty = {
        1: "Easy",
        2: "Moderate",
        3: "Intermediate",
        4: "Difficult",
        5: "Extreme"
    };

    return (
        <div>
            <div className="container-activities">
                {activities.map(props => (
                    <div key={props.id} className="card-activities">
                        <div className="title-props-activities">
                            <h2>{props.name}</h2>
                        </div>
                        <div className="props-activities">
                            <p><strong>Difficulty: </strong>{difficulty[props.difficulty]}</p>
                            <p><strong>Duration: </strong>{props.duration} hours</p>
                            <p><strong>Season: </strong>{props.season}</p>
                            <p><strong>Countries: </strong>{props.Countries?.map(c => c.name)}</p>
                        </div>
                        <div className="container-button">
                            <button onClick={() => dispatch(deleteActivities(props.id))}><AiFillDelete /></button>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    );
};

export { Card_Activities };