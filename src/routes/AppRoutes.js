import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// created components
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default AppRoutes;