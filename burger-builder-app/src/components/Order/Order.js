import React from 'react';
import classes from './Order.module.css';



const order =(props)=>{
    const ingredients=[];

    for(let ingName in props.ingredients){
        ingredients.push({
            name:ingName,
            amount:props.ingredients[ingName]
        })
    }

    const ingOutput = ingredients.map(ing =>{
        return <span key={ing.name} style={{textTransform:'capitalize'}}>{ing.name} ({ing.amount})</span>
    })
return (
    <div className={classes.Order}>
        {ingOutput}
        <p>Price: <strong>USD {props.price}</strong></p>
    </div>
)
}

export default order;