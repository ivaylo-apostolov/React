import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>This dev name is {props.name} and his age is {props.age}</p>
            <p >{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;