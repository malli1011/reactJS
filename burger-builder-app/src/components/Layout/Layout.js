import React, { Component, Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToogleHandler= () => {
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    render() {
        return (
            <Fragment>
                <Toolbar clicked={this.sideDrawerToogleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }

}

export default Layout;