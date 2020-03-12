import React, { Component } from 'react';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';

class Checkout extends Component {

      
    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler=()=>{
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        const price = +this.props.price;
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path+'/contact-data'}  component={ContactData}/>
               
            </div>);

    }
}

const mapStateToProps = state =>{
    return{
        ings:state.ingredients
        
    }
}

export default connect(mapStateToProps)(Checkout);