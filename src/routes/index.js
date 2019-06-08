import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from '../pages/list';
import Home from '../pages/home';
import Detail from '../pages/detail';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
