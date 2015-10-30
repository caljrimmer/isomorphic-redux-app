import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import DevTools from '../server/devtools';

import "../../styles/index.css";

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
	  <Provider store={store}>
	    <ReduxRouter>
	      <Router children={routes} history={history} />
	    </ReduxRouter>
	  </Provider>
  </div>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  require('../server/createDevToolsWindow')(store);
}