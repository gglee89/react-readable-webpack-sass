import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './Layout'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>,
    document.getElementById('root')
);
