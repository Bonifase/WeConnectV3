import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Signup from '../signup/Signup';
import BusinessForm from '../businesses/BusinessForm';
import About from '../about/About'
import LoginForm from '../login/LoginForm';
import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/Signup';
import ForgotPasswordPage from '../login/ForgotPasswordPage';

const routes = (props) => {
  return (
   
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/login" component = {LoginPage} />
        <Route path="/signup" component = {Signup}  />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/businessform" component={BusinessForm} />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
      </Switch>
  );
};

export default routes;