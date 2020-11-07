import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Event from './pages/Event';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/app' component={Event} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;