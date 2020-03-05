import React, { Component } from 'react';
import ContactData from '../ContactData/ContactData';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients:null,
        totalPrice:0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        console.log(query);
        const ing ={};
        for(let i of query.entries()){
            if(i[0]==='totalPrice'){
                this.setState({totalPrice:i[1]});
            }else{
                ing[i[0]]= +i[1];
            }
            
        }
        console.log(ing);
        this.setState({ingredients:ing});
    }

    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler=()=>{
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        const price = +this.state.totalPrice;
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path+'/contact-data'} 
                render={()=><ContactData {...this.props} ingredients={this.state.ingredients} totalPrice={price.toFixed(2)}/>}/>
            </div>);

    }
}

export default Checkout;