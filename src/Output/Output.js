import React from 'react';
import './Style.css'

const output = (props) => {
    return (
        <div className="Ouput">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>)
}

export default output;

