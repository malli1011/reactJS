import React,{Fragment} from 'react';

import BackDrop from './Backdrop/BackDrop'
import classes from './Modal.module.css';


const modal = (props) => {
    return (
        <Fragment>
            <BackDrop show={props.show}  cancle={props.modalClosed}></BackDrop>
        <div className={classes.Modal}
            style={
                {
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }
            } >

            {props.children}
        </div>
        </Fragment>
    )
};

export default modal;