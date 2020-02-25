import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


const burger = (props) =>{

    let transformedIngredients = Object.keys(props.ingredients)
                .map( inKey =>{ return [...Array(props.ingredients[inKey])].map((_,i)=> <BurgerIngredient key={inKey+i} type={inKey}/>) })
                .reduce((arr,el)=>arr.concat(el));
    
    if(transformedIngredients.length ===0){
        transformedIngredients = <p>Pease add ingredients</p>;
    }

    return (
        <div className ={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;