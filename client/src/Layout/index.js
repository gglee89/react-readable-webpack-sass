import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Index from '../pages/index'
import Category from '../pages/category'
import NotFound from '../pages/notFound'
import Posts from '../pages/posts'
import Post from '../pages/post'
import Comments from '../pages/comments'
import Comment from '../pages/comment'

import { Container, Divider, Header, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

class Layout extends Component {
    render() {
        return (
            <Container>
                <Link to="/">
                    <Header as="h1" className={h1}>
                        React ND
                    </Header>
                </Link>
                <Link to="/categories">
                    <Header as="h1" className={h1}>
                        All Categories
                    </Header>
                </Link>
                <Link to="/posts">
                    <Header as="h1" className={h1}>
                        All Posts
                    </Header>
                </Link>
                <Divider />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/categories" component={Category} />
                    <Route exact path="/:category/posts" component={Posts} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/posts/:id" component={Post} />
                    <Route exact path="/posts/:id/comments" component={Comments} />
                    <Route exact path="/comments/:id" component={Comment} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        );
    }
}

export default Layout;
