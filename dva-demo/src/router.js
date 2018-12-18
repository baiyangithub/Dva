import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Page from './routes/Page';
import Product from './routes/Product';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
