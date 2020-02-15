import React from 'react';

import './InputText.css';

const inputText = (props) =>{
    return(
        <div className='inputText'>
            <label>{props.inputTitle}: 
            <input type='text' onChange={props.changed}/>
            </label>
        </div>
    )
}

export default inputText;