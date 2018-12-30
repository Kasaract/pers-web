import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" component={Error} />
        </Switch>
    </Router>
)

export default Routes;