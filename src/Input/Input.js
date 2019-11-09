import React from 'react';
import './Style.css'

const input = (props) => {
    return (
        <div className="Input">
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default input;