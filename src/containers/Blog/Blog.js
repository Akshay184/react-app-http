import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {  
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact 
                                to = "/"
                                activeClassName = "my-active"
                                activeStyle = {{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to = "/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" exact render = {() => <h1>Home</h1>} />
                <Route path = "/" render = {() => <h1>Home 2</h1>} /> */}
               
                <Switch>
                    <Route path = "/new-post" exact component = {NewPost} />
                    <Route path = "/"  component = {Posts} />
                     {/* hadling 404
                     but this only works if there is no root route
                     <Route render = {() => <h1>404 Page Not Found</h1>} /> */}
                     
                </Switch>
                
            </div>
        );
    }
}

export default Blog;