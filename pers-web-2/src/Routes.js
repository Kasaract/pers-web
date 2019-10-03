import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Experiences from './Experiences';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Home} />
      <Route path="/uiux" component={Home} />
      <Route path="/contact" component={Home} />
    </Switch>
  </Router>
)

export default Routes;