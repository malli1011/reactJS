import React, {Fragment } from 'react';
import Classes from './Layout.module.css';

const layout = (props) =>(
    <Fragment>
        <div> Toolbar, SideDrawer, backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Fragment>
    
);

export default layout;