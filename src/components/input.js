import React from 'react';

const Input = (data) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label> {title} </label>
        </div>
    )
}

export default Input;