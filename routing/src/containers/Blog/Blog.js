import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
// loading NewPost component lazily
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from '../Blog/Posts/Posts';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // hash: '#submit',
                                // search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null }
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>404 Page Not Found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
