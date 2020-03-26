import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false,
    building:false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredients=(state,action)=>{
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building:true

    };
}

const removeIngredients=(state,action)=>{
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
}

const setIngredients=(state,action)=>{
    return{
        ...state,
        ingredients:action.ingredients,
        error:false,
        totalPrice:4,
        building:true
    }
}

const fetchIngredients=(state,action)=>{
    return{
        ...state,
        error:true
    }
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredients(state,action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredients(state,action)
        case actionTypes.SET_INGREDIENTS: return setIngredients(state,action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state,action)
        default: return state;
    }

}

export default reducer;