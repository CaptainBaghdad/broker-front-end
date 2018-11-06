import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route } from 'react-router';
import App from './App';
import SignUp from './components/SignUp';

const Root = ({store}) => (
<Provider store={store}>
    <Router  >
        <Route path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        </Router>
        </Provider>
);



export default Root;