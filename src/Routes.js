import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Read from './Read';
import Listen from './Listen';
import Learn from './Learn';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/read" component={Read} />            
      <Route exact path="/listen" component={Listen} />
      <Route exact path="/learn" component={Learn} />
    </Switch>
  </Router>
)

export default Routes;