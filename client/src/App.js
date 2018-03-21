import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './component/main'
import Category from './component/category'
import NotFound from './component/notFound'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/categories" component={Category} />
                        <Route component={NotFound} />
                    </Switch>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
