import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Index from '../pages/index'
import Category from '../pages/category'
import NotFound from '../pages/notFound'

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
                <Divider />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/categories" component={Category} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        );
    }
}

export default Layout;
