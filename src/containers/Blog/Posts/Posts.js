import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post =>
                    {
                        return {
                            ...post,
                            author: 'Akshay'
                        }
                    });
                this.setState({posts: updatedPosts});
            });
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push('/' + id);
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                // <Link to = {"/" + post.id} key = {post.id}>
                    <Post
                        key = {post.id}
                        title = {post.title} 
                        author = {post.author}
                        clicked = {() => this.postSelectedHandler(post.id)} />
                // </Link>
            )
        });

        return (
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path = '/:id' component = {FullPost}></Route>
            </div>
        );
    }
}

export default Posts;