import React, { Fragment, Component } from 'react';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component {
    render() {
        return (
            <Fragment>
                <Burger/>
                <div>Burger contorls</div>
            </Fragment>
        )
    }
}

export default BurgerBuilder;