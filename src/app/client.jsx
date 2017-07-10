
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import reducers from './main/reducers/index';

const logger = createLogger();
const middleware = applyMiddleware(thunk, promise, logger);
const store = createStore(reducers); //, middleware);

const sample = (<div>My react Boiler Plate</div>);

const view = (
    <Provider store={store}>
        {sample}
    </Provider>
);

ReactDOM.render(view, document.getElementById('app'));
