// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;