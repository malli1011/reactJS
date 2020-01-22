
import React from 'react';
import Radium from 'radium';


const char = (props)=>{
const style={
    display:'inline-block',
    padding:'16px',
    margin:'16',
    border:'1px solid black',
    textAlign:'center',
    ':hover':{
        backgroundColor:'lightgreen'

    }
};

    return (
        <div style={style} onClick={props.ondelete}>
            {props.char}
        </div>
    );
}

export default Radium(char);