import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Alex',
        submitted: false
    }

    componentDidMount () {
        // check to see if user is authenticated
        // if not redirect back to page /posts
        // if (!this.props.auth) ...
        // this.props.history.replace('/posts')

        console.log('newpost:', this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                // pushes the new page /posts on the history stack
                this.props.history.push('/posts');

                // replaces the page /posts with the current page /new-post
                // this.props.history.replace('/posts');

                // use state to conditionally redirect
                // this.setState({
                //     submitted: true
                // })
            });
    }

    render () {
        // use state to conditionally redirect
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
