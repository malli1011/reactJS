import React,{Fragment} from 'react';

const orderSummary = (props)=>{
const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => {
                           return (
                           <li key={ingKey}> 
                               <span style={{textTransform:'capitalize'}}>{ingKey}</span>:{props.ingredients[ingKey]}
                            </li>);
                        });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Delicous burger with the following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total Price : <strong>{props.price.toFixed(2)}$</strong></p>
            <p>continue to checkout</p>
            <div className='btn-group'>
                <button className='btn btn-danger' onClick={props.modalClosed}>Cacel</button>
                <button className='btn btn-primary' onClick={props.continueOrder}>Continue</button>
            </div>
        </Fragment>
    );
}

export default orderSummary;