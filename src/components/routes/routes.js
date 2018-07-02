import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Home from "../home/Home";
import Signup from "../signup/Signup";
import BusinessForm from "../businesses/BusinessForm";
import About from "../about/About";
import LoginPage from "../login/LoginPage";
import ForgotPasswordPage from "../login/ForgotPasswordPage";
import ResetPasswordPage from "../login/ResetPasswordPage";
import AddReviewForm from "../businesses/reviews/AddReviewForm";
import BusinessProfilePage from "../businesses/BusinessProfilePage";
import ReviewPage from "../businesses/reviews/ReviewPage";
import AddBusinessPage from "../businesses/AddBusinessPage";

const routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/businesses" exact component={Dashboard} />
      <Route path="/home" component={Dashboard} />
      <Route path="/businesses/edit/:_id" component={BusinessForm} />
      <Route path="/businesses/:_id" exact component={BusinessProfilePage} />
      <Route path="/businesses/:_id/review" exact component={AddReviewForm} />
      <Route path="/businesses/:_id/reviews" exact component={ReviewPage} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/add-business" exact component={AddBusinessPage} />
    </Switch>
  );
};

export default routes;
