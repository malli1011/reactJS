import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad:0.5,
    meat:1,
    bacon:0.7,
    cheese:0.5
}
class BurgerBuilder extends Component{

    componentDidMount() {
        debugger;
    }

    state = {
        ingredients:{
            meat:0,
            cheese:0,
            salad:0,
            bacon:0
        },
        totalPrice:5,
        purchasable:false
       
    };

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount =oldCount>0?oldCount-1:0;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients:newIngredients,totalPrice:newPrice});
        this.setPurchasableState(newIngredients);
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount+1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]=newCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:newIngredients,totalPrice:newPrice});
        console.log(this.state.ingredients);
        this.setPurchasableState(newIngredients);
    }

    setPurchasableState = (ingredients)=>{
        const sum = Object.keys(ingredients).map(ingKey => ingredients[ingKey]).reduce((sum,el)=> sum + el,0);
        console.log("Sum :"+sum)
        this.setState({purchasable:sum>0})
    }

    render(){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            if(disabledInfo[key]===0){
                disabledInfo[key]=true;
            }else{
                disabledInfo[key]=false;
            }
        }
        return(
            <div className="container">
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls ingredientAdd={this.addIngredientHandler}
                  ingredientDelete={this.removeIngredientHandler}
                  disabledInfo={disabledInfo}
                  price={this.state.totalPrice}
                  purchasable={this.state.purchasable}></BuildControls>
            </div>
        );
    }
}

export default BurgerBuilder;