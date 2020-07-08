import React from 'react';
import { Fragment } from 'react';
import Classes from './Layout.module.css';



const layout = (props) => (
    <Fragment>
        <div>Toolbar,sideDrawer,Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>

    </Fragment>
);

export default layout;