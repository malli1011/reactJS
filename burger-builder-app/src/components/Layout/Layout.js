import React, {Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Classes from './Layout.module.css';

const layout = (props) =>(
    <Fragment>
        <Toolbar></Toolbar>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Fragment>
    
);

export default layout;