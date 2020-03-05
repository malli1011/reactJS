import React, { Component } from 'react';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={()=> <h2>Home</h2>}/>*/}
                <Switch>
                    <Route path='/new-post' exact component={NewPost} />
                    <Route path='/posts'  component={Posts} />
                    <Route render={() => <h1>Page Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;