import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import configureStore from '../common/store/configureStore';
import { getUser } from '../common/api/user';
import routes from '../common/routes';
import packagejson from '../../package.json';

const app = express();
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../../dist'));
}

app.get('/*', function (req, res) {

  const location = createLocation(req.url);

  getUser(user => {

      if(!user) {
        return res.status(401).end('Not Authorised');
      }

      match({ routes, location }, (err, redirectLocation, renderProps) => {

        if(err) {
          console.error(err);
          return res.status(500).end('Internal server error');
        }

        if(!renderProps)
          return res.status(404).end('Not found');

        const store = configureStore({user : user, version : packagejson.version});

        const InitialView = (
          <Provider store={store}>
            {() =>
              <RoutingContext {...renderProps} />
            }
          </Provider>
        );

        //This method waits for all render component promises to resolve before returning to browser
        fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
          .then(html => {
            const componentHTML = React.renderToString(InitialView);
            const initialState = store.getState();
            res.status(200).end(renderFullPage(componentHTML,initialState))
          })
          .catch(err => {
            console.log(err)
            res.end(renderFullPage("",{}))
          });
      });

    }
  )

});

const server = app.listen(3002, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});