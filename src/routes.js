import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Users from './containers/Users';

function Routes(){

    return(
        <Router>
            <Switch>
            <Route exect path='/' component={Home} />
            <Route exect path='/usuarios' component={Users} />
            </Switch>
        </Router>
    );
}
export default Routes;