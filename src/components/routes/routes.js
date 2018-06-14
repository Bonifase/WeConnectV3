import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Signup from '../signup/Signup';
import BusinessForm from '../businesses/BusinessForm';
import About from '../about/About'
import LoginForm from '../login/LoginForm';
import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';

const routes = (props) => {
  return (
   
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/login" component = {LoginPage} />
        <Route path="/signup" component = {SignupPage}  />
        <Route path="/About" component={About} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/BusinessForm" component={BusinessForm} />
      </Switch>
  );
};

export default routes;