import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import axios from '../../axios';
import classes from './ContactData.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class ContactData extends Component{

state={
    name:'',
    email:'',
    address:{
        street:'',
        postalCode:''
    },
    loading:false

}

orderHandler =(event)=>{
    event.preventDefault();
   this.setState({ lodading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Malli',
                address: {
                    street: 'Izabella utca',
                    zipcode: 1063,
                    country: 'Hungary'
                },
                email: 'test@testmail.com'
            }
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ lodading: false });
                this.props.history.replace("/");
            })
            .catch(err => this.setState({ lodading: false }));
            
}

    render(){

        let form=(<form>
            <input type="text" name="name" placeholder="Enter Name" className={classes.Input}/>
            <input type="email" name="email" placeholder="Enter Email" className={classes.Input}/>
            <input type="text" name="street" placeholder="Enter Street" className={classes.Input}/>
            <input type="text" name="postal" placeholder="Enter Postal Code" className={classes.Input}/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                    <h4>Enter Contact Details.</h4>
                    {form}
            </div>
        )
    }
}

export default ContactData;