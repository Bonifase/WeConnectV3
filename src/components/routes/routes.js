import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import GuestDashboard from "../dashboard/GuestDashboard";
import Home from "../home/Home";
import Signup from "../signup/Signup";
import BusinessForm from "../businesses/BusinessForm";
import About from "../about/About";
import LoginPage from "../login/LoginPage";
import ForgotPasswordPage from "../login/ForgotPasswordPage";
import ResetPasswordPage from "../login/ResetPasswordPage";

const routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/home" component={GuestDashboard} />
      <Route path="/businesses" component={BusinessForm} />
      <Route path="/businesses/:_id" component={BusinessForm} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
    </Switch>
  );
};

export default routes;
