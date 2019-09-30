import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Experiment from './Experiment';
import Experiences from './Experiences';

const Routes = () => (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Experiment} />
    </Switch>
  </Router>
)

export default Routes;