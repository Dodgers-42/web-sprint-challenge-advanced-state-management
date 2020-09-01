import React from 'react';
import {Link} from "react-router-dom";

const Smurf = props => {
    return (
        <div className="smurf">
            <Link to={`smurf/${props.smurf.id}`}>
                <h3>{props.smurf.name}</h3>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </Link>
        </div>
    )
}

export default Smurf;