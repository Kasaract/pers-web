import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
// import Resume from './Resume';
// import Projects from './Projects';
// import Experiences from './Experiences';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/resume" component={Resume} /> */}
      {/* <Route path="/projects" component={Projects} />
      <Route path="/uiux" component={Home} /> */}
    </Switch>
  </Router>
)

export default Routes;