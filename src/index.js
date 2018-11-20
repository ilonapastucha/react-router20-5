//import React from 'react';
//import { render } from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router';
//import { Provider } from 'react-redux';
//import store from './store';
//import Navigation from './presentational/navigation.component';
//import { getCountries } from './actions/actions-countries';
//import DevTools from './store/DevTools';

//render(
//    <Provider store={store}>
//        <Router history={hashHistory}>
//            <Route path='/' component={Navigation}>
//                <div>
//                    <h1>Inicjalizacja projektu</h1>
//                    <DevTools />
//                </div>
//            </Route>
//        </Router>
//    </Provider>,
//    document.getElementById('root')
//);

//store.dispatch(getCountries());
//console.log(store.getState());

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import store from './store/index';
import { getCountries } from './actions/actions-countries';

import './country.css';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());