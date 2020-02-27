import React from 'react';

import classes from './DrawerToogle.module.css';

const drawerToogle =(props)=>{
    return (
        <div onClick={props.clicked}>Menu</div>
    )
};

export default drawerToogle;