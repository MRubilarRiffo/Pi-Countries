import { useState } from "react";
import { Forms } from "../Forms/Forms";
import { useSelector } from "react-redux";
import "./Activities.css"
import { Card_Activities } from "../Card/Card_Activities";

const Activities = () => {
    const activities = useSelector(state => state.activities);

    const [formOn, setFormOn] = useState(false);

    return (
        <div>
            <div className="tittle-activities">
                <h1>Activities</h1>
            </div>
            {
                !formOn
                    ? <button onClick={() => setFormOn(!formOn)}>Add Activity</button>
                    : <Forms />
            }
            <Card_Activities activities={activities}/>
            {!activities.length && <h2>Oops! There are no activities to display.</h2>}
        </div>
    );
};

export { Activities };