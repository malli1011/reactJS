import * as actionTypes from './actionTypes';

import axios from '../../axios';

export const addIngredient =(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient =(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const fetchIngredientsFailed=(error)=>{
    return{
        type:actionTypes.FETCH_INGREDIENTS_FAILED,
        error:error
    }
}

export const setIngredients = (ingredients)=>{
return{
    type:actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
}
}

export const initIngredients = ()=>{
    return dispatch =>{
        axios.get("/ingredients.json")
            .then(res => dispatch(setIngredients(res.data)))
            .catch(error => {
                dispatch(fetchIngredientsFailed(true))
            });
        
    }
}