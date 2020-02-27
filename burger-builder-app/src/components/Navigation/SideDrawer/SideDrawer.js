import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Modal/Backdrop/BackDrop';
import classes from './SideDrawer.module.css';


const sideDrawer = (props) => {

    let attachedclasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedclasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <BackDrop show={props.open} cancle={props.closed}/>
            <div className={attachedclasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )

};

export default sideDrawer;