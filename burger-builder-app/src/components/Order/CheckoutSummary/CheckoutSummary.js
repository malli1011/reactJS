import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary =(props)=>{
return(
    <div className={classes.CheckoutSummary}> 
        <h3>Your Delicious Burger !!</h3>
        <div style={{width:'100%', alignContent:'center',margin:'Auto'}}>
            <Burger ingredients = {props.ingredients}></Burger>
        </div>
        <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
    </div>
)
}

export default checkoutSummary;