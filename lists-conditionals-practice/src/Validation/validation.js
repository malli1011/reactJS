
import React from 'react';


const validation = (props)=>{
    var message ="input text too short.";

    if(props.inputLength>5){
        message = "input text length correct ";
    }
    return (
        <div>
            <p>{message}</p>
        </div>
       
    )
}

export default validation;