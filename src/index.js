import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import loadReducer from './reducers/loadReducer'


const store = createStore(loadReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));


