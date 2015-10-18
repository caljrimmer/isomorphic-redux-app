import 'babel-core/polyfill';

import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

import "../../styles/index.css";

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

React.render(
  <Provider store={store}>
    {() =>
        <ReduxRouter>
          <Router children={routes} history={history} />
        </ReduxRouter>
    }
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  require('../server/devtools')(store);
}
