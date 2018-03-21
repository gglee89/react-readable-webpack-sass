import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './component/main'
import Category from './component/category'
import NotFound from './component/notFound'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/categories" component={Category} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
