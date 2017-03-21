import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware  } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { initFacebook } from './services/fbService';
import { logIn } from './actions/actions';

require('./favicon.ico');

// import './styles/styles.scss';
const routingMiddleware = routerMiddleware(browserHistory)
const store = configureStore(undefined, [routingMiddleware]);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);


initFacebook().then(() => {store.dispatch(logIn())});