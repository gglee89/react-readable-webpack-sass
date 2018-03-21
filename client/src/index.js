import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Index from './pages/Index';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
