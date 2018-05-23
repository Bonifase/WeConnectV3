import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/registration';
import Login from './components/login';
import Main from './components/dashboard';
import EventCardDetails from './components/EventCardDetails';


export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={registration} />
        <Route path="/test" component={EventCardDetails} />
        <Route path="/events/:id" component={EventCardDetails} />
      </Switch>
    </Router>
  );
};