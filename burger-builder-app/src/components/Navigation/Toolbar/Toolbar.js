import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'; 
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle'

const toolbar= (props) => {
    return (
        <header className={classes.Toolbar}>
           <DrawerToogle clicked={props.clicked}/>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
            
        </header>
    )
};
export default toolbar;