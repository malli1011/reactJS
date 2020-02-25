import React from 'react';


const buildControl =(props) => {
    return (
        <div className="input-group mb-3" role="group">
            <div className="input-group-prepend">
            <span className="input-group-text">{props.label}</span>
            </div>
            <div className="btn-group">
            <button className="btn btn-primary" onClick={props.addHandler} >More</button>
            <button className="btn btn-primary" onClick={props.deleteHandler} disabled={props.disabledInfo}>Less</button>
            </div>
            
        </div>
    )
}

export default buildControl; 