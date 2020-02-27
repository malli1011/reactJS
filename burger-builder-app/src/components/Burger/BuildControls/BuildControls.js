import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const buildControls = (props) => {

    const controls =[
        {label:'Salad', type:'salad'},
        {label:'Bacon', type:'bacon'},
        {label:'Cheese', type:'cheese'},
        {label:'Meat', type:'meat'},
    ];

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
            {
            controls.map(ctrl => <BuildControl 
                key={ctrl.label}
                label={ctrl.type}
                addHandler={() => props.ingredientAdd(ctrl.type)}
                deleteHandler={()=>props.ingredientDelete(ctrl.type)}
                disabledInfo = {props.disabledInfo[ctrl.type]}/>
            )}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>CHECK OUT</button>
        </div>
    );
}
export default buildControls;