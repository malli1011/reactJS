import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
        .then(res =>{
            const fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push({
                    id:key,
                    ...res.data[key]
                })
            }
            this.setState({loading:false,orders:fetchedOrders});
        }).catch(err => { 
            this.setState({loading:false})
        })
       
    }

    render() {
        console.log(this.state.orders);
        const orders = this.state.orders.map(order =>{
           return <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
        })

        return (
            <div style={{ width: "80%", align: "center" }}>
                {orders}
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios);